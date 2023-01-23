import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey:process.env.NEXT_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

export default async function handler(req,res){
    const {imagePrompt,artStyle} = req.body ;
    const prompt = `generate ${artStyle} image of ${imagePrompt} .`;

    const response = await openai.createImage({
      prompt: prompt,
      n:1,
      size:"512x512",
    });

    const output = response.data.data[0].url;
    return res.status(200).json({ data: output })
}