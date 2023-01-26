import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.NEXT_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

export default async function handler(req,res){
    const {ingredients,duration,isOven,isBlender,isMicrowave,isStove} = req.body ;
    
    const prompt = `write a complete meal recipe including cooking steps, meal name and ingredients . 
    For a chef with these ingredients : ${ingredients} , duration should be less than ${duration} minutes,
    and achievable using these  cooking tools :  ${isOven ? "oven," : ""} ${isBlender ? "blender," : ""} 
    ${isMicrowave ? "microwave," : ""} ${isStove ? "stove" : ""}. return in HTML format `;


    const response = await openai.createCompletion({
      model: "text-davinci-003", 
      prompt: prompt,
      temperature: 0.95 ,
      max_tokens: 3000,

    })

    const output = response.data.choices.pop();
 
    return res.status(200).json({ data: output })
}