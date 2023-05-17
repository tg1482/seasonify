const { Configuration, OpenAIApi } = require("openai");

module.exports = async ({ api, record, params, logger, connections }) => {

  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);
  let newProductDescription;
  let productTags = params.shopifyProduct.tags;

  // Only generate a GPT3 product description if the product tag 'GPT3' exists
  if (productTags.includes('GPT3')) {

    try {
      const completion = await openai.createCompletion({
        model: "text-davinci-002",
        prompt: `This is a Shopify product titled "${params.shopifyProduct.title}" with  description: ${params.shopifyProduct.body}. Please make the description more imaginative and attractive to potential buyers. Use text speaking to the buyer, include a sentance with made up facts that will impress them, and two scenarios of why they would want to own this product. Return the new description with HTML markup <p> for paragraphs and <br> for line breaks. Use at most 200 words.`,
        temperature: 0,
        max_tokens: 250,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
      });

      // Store the GPT3 product description
      newProductDescription = completion.data.choices[0].text;

    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
      } else {
        console.log(error.message);
      }
    }

    // Remove the GPT3 tag from array of product tags
    productTags.splice(productTags.indexOf('GPT3'), 1);

    // Set up the Shopify connection and write the new product description, and remove the GPT3 product tag
    const shopify = await connections.shopify.current;
    if (shopify) {
      await shopify.product.update(record.id, { tags: productTags, body_html: newProductDescription });

      console.log(`Updated product description for product ID ${record.id} to: ${newProductDescription}`)
    }

  }

};