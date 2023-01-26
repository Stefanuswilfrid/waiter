import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey:process.env.NEXT_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

export default async function handler(req,res){
    const {imagePrompt,artStyle} = req.body ;
    const number = req.body.number ;
    console.log("h",number)

    const prompt = `generate ${number} ${artStyle} image of ${imagePrompt} in array format .`;

    const response = await openai.createImage({
      prompt: prompt,
      n:parseInt(number),
      size:"256x256",
    });

    const output = response.data.data;
    return res.status(200).json({ data: output })
}