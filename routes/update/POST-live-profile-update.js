const ProductProfileManager = require("../../src/productProfileManager");

module.exports = async ({ request, reply, api, logger }) => {
  try {
    const combinedProductQuery = `
      query {
        shopProductProfiles(first: 250){
          edges {
            node {
              id
              profileName
              active
              profileBody
              updatedAt
              live
              shop {
                id
              }
              product {
                id
                title
                images {
                  edges {
                    node {
                      id
                      source
                    }
                  }
                }
              }
              season {
                name
                startDate
                endDate
              }
            }
          }
        }
      }
    `;

    const data = await api.gql(combinedProductQuery);

    // Assuming that 'data.shopProductProfiles.edges' is the correct path to the product profiles.
    const productProfiles = data.shopProductProfiles.edges;

    const profileManager = new ProductProfileManager(productProfiles, api);
    profileManager.updateDatesForNewYear();
    await profileManager.refreshAllProductProfiles();

    reply.send({ status: "Success", message: "Product profiles updated." });
  } catch (error) {
    logger.error(error);
    reply.code(500).send({ status: "Error", message: "Failed to update product profiles." });
  }
};
