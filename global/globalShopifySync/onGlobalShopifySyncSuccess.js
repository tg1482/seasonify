/**
 * Effect code for global action globalShopifySync
 * @param { import("gadget-server").GlobalShopifySyncGlobalActionContext } context - Everything for running this effect, like the api client, current record, params, etc
 */
module.exports = async ({ api, scope, logger, params }) => {
  // access models in your Gadget application with the api object
  // const otherRecords = await api.blogPost.findMany({first: 10});

  // make API calls to other systems with libraries from npm
  // make sure to first add axios as a dependency in your package.json
  // const axios = require("axios");
  // await axios.post("https://some-other-api.com/v1/api", { body: record.toJSON() });

  // use passed in params (see definition sample below)
  // const foobar = params.foo + params.bar;

  // return values from your global action
  // scope.result = { foo: "bar" };
};

// define custom params to pass values to your global action
// module.exports.params = {
//    foo: { type: "string" },
//    bar: { type: "number" }
// }
