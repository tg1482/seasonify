/**
 * Create records for four seasons.
 * @param {String} shopId - the shop id where records will be created.
 */
module.exports = async ({ request, reply, api, logger, connections, params }) => {
  const { shopId } = request.body;
  const currentYear = new Date().getFullYear();
  const seasons = {
    Spring: { startDate: new Date(currentYear, 2, 1), endDate: new Date(currentYear, 5, 31) },
    Summer: { startDate: new Date(currentYear, 5, 1), endDate: new Date(currentYear, 8, 31) },
    Fall: { startDate: new Date(currentYear, 8, 1), endDate: new Date(currentYear, 11, 30) },
    BFCM: { startDate: new Date(currentYear, 10, 25), endDate: new Date(currentYear, 11, 1) },
  };

  logger.info(`Creating season records for shop with ID: ${shopId}`);
  logger.info(`Request body: ${Object.keys(request.body)}`);
  logger.info(`API ${api}`);
  logger.info(`Params ${Object.keys(params)}`);
  logger.info(`Current year: ${currentYear}`);

  for (const season in seasons) {
    const dummyRecord = {
      shop: { _link: shopId },
      name: season,
      startDate: seasons[season].startDate,
      endDate: seasons[season].endDate,
      active: false,
    };

    try {
      await api.shopSeasonDimension.create(dummyRecord);
      logger.info(`Successfully created ${season} season record for shop with ID: ${shopId}`);
      await reply.type("application/json").send(`Successfully created ${season} season record for shop with ID: ${shopId}`);
    } catch (error) {
      logger.error(`Error creating ${season} season record for shop with ID: ${shopId}: ${error}`);
      await reply.type("application/json").send(`Error creating ${season} season record for shop with ID: ${shopId}: ${error}`);
    }
  }
};
