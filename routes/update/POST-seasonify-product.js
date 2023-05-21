import { Configuration, OpenAIApi } from "openai";

export default async ({ api, reply, request, logger, connections }) => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // request.body = JSON.parse(request.body);

  console.log(request.body);

  const productName = request.body.productName;
  const productBody = request.body.productBody;
  const seasonName = request.body.seasonName;

  const openai = new OpenAIApi(configuration);

  // Only generate a GPT3 product description if the product tag 'GPT3' exists
  try {
    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: `This is a Shopify product titled "${productName}" with description: ${productBody}. Update the description to market the product exclusively during ${seasonName} season to potential buyers. Keep an enthusiastic tone, talk about the product in detail, and two scenarios of why they would want to own this product. Return the new description with HTML markup <p> for paragraphs and <br> for line breaks. It should be well formatted. Use at least 200 words.`,
      temperature: 0,
      max_tokens: 300,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });

    console.log(completion.data.choices[0].text);
    console.log(completion.data);
    // Store the GPT3 product description
    const newProductDescription = completion.data.choices[0].text;

    // Send response to client
    await reply.send(newProductDescription);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
    } else {
      console.log(error.message);
    }
  }
};
