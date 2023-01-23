import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.NEXT_API_KEY,
});
const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const { userInput } = req.body;
  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: userInput,
    temperature: 0.8,
    max_tokens: 250,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  // Send over the Prompt #2's output to our UI instead of Prompt #1's.
  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
