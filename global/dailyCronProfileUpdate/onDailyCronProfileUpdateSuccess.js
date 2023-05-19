/**
 * Effect code for global action dailyCronProfileUpdate
 * @param { import("gadget-server").DailyCronProfileUpdateGlobalActionContext } context - Everything for running this effect, like the api client, current record, params, etc
 */

module.exports = async ({ api, scope, logger, params }) => {
  // Get all shop product profiles
  const productProfiles = await api.shopProductProfile.findMany();

  // Instantiate the ProfileTimeline for each product
  let timelines = {};

  productProfiles.forEach((profile) => {
    if (!timelines[profile.product]) {
      timelines[profile.product] = new ProfileTimeline([]);
    }
    timelines[profile.product].addProfile(profile);
  });

  // Check the current active profile for each product
  for (let product in timelines) {
    const currentProfile = timelines[product].getCurrentProfile(new Date());

    // Reset LiveStatus for all profiles of the product
    const resetLiveStatusResult = await api.shopProductProfile.updateMany({
      where: { product },
      data: { LiveStatus: false },
    });

    if (resetLiveStatusResult) {
      logger.info(`Reset LiveStatus for all profiles of product: ${product}`);
    }

    if (currentProfile) {
      // Set LiveStatus to true for the current profile
      const updateLiveStatusResult = await api.shopProductProfile.update(currentProfile.id, {
        LiveStatus: true,
      });

      if (updateLiveStatusResult) {
        logger.info(`Updated LiveStatus for profile: ${currentProfile.id}`);
      }
    }
  }

  // return result
  scope.result = { status: "Success" };
};
