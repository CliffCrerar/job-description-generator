import { Configuration, OpenAIApi } from "openai";

const openAiConfig = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
})

const generatePrompt = ({ 
  jobTitle,
  industry,
  keyWords,
  tone,
  numWords }) => `Write a job description for a ${jobTitle} role${industry ? `in the ${industry} industry` : ""} that is around ${numWords || 200} words in a ${tone || "neutral"} tone${keyWords ? `Incorporate the following keywords: ${keyWords}.` : "."} The job position should be described in a way that is SEO friendly, highlighting its unique features and benefits.`;

const generateDescription = async (input) => {

  console.log(openAiConfig);

  const openai = new OpenAIApi(openAiConfig);

  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(input),
    max_tokens: input.numWords || 200,
    temperature: 0.5,
  })

  console.log(completion);
  return completion.data.choices[0].text;
};

export default async function handler(req, res) {
  // const { jobTitle, industry, keyWords, tone, numWords } = req.body;

  console.log(typeof 
    
  console.log(process.env.OPENAI_API_KEY);

  const jobDescription = await generateDescription(req.body);

  console.log(jobDescription);

  res.status(200).json({jobDescription});
}