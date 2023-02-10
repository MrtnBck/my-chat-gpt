import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

console.log(process.env.OPENAI_KEY);
const app = express();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  try {
    const question = req.body.question;

    const response = await openai.createCompletion({
      //? what are these parameters??
      model: "text-davinci-003",
      prompt: `${question}`,
      max_tokens: 3000,
      temperature: 0,
      top_p: 1,
      n: 1,
      stream: false,
      logprobs: null,
      stop: "\n",
    });

    res.status(200).send({
      bot: (await response).data.choices[0].text,
    });
  } catch (error) {
    if (error) {
      res.status(500).send(error.response || "Something went wrong");
    } else {
      res.status(500).send(error.message || "Something went wrong");
    }
  }
});

app.listen(8000, () => {
  console.log(`OpenAI server started on http://localhost:8000`);
});
