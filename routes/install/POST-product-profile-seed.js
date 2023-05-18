module.exports = async ({ request, reply, api, logger, connections, params }) => {
  const requestBody = JSON.parse(request.body);
  const { shopId } = requestBody;
  const seasons = await api.shopSeasonDimension.findMany();
  const products = await api.shopifyProduct.findMany();

  logger.info(`Creating product records for shop with ID: ${shopId}`);

  for (const season of seasons) {
    for (const product of products) {
      logger.info(`Product ID: ${product.id}`);
      logger.info(`Season ID: ${season.id}`);
      const dummyRecord = {
        profileName: `${season.name} - ${product.title}`,
        active: false,
        startDate: season.startDate,
        endDate: season.endDate,
        body: product.body || "",
        product: { _link: product.id },
        season: { _link: season.id },
        shop: { _link: shopId },
      };

      logger.info(`Creating dummy: ${dummyRecord}`);

      try {
        await api.shopProductProfile.create(dummyRecord);
        const log_message = `Successfully created ${dummyRecord.profileName} season record for product with ID: ${product.id}`;
        logger.info(log_message);
        await reply.type("application/json").send(log_message);
      } catch (error) {
        const error_message = `Error creating season record for product with ID: ${product.id}: ${error}`;
        logger.error(error_message);
        await reply.type("application/json").send(error_message);
      }
    }
  }
};
