import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.NEXT_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

export default async function handler(req,res){
    const {messageType,warmOrCold,personReceiving,messageReason} = req.body ;
    const prompt = `write a ${warmOrCold} ${messageType} to the person for the specified reason below. 
    Make sure the message is tailored toward the person's experience & skillset . Person: ${personReceiving}
    Reason : ${messageReason}.`;

    const response = await openai.createCompletion({
      model: "text-davinci-003", 
      prompt: prompt,
      temperature: 0.95 ,
      max_tokens: 3000,

    })

    const output = response.data.choices.pop();
 
    return res.status(200).json({ data: output })
}
