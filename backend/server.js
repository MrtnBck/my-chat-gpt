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

app.post("/openai/api/completitions", async (req, res) => {
  console.log("Hello from backend..");
  try {
    const question = req.body.question;
    console.log(question);
    res
      .status(200)
      .send(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus lectus vel pretium imperdiet. Suspendisse id lobortis neque, vel tempor purus. Nullam diam ipsum, mollis sed ultricies imperdiet, consequat sed augue"
      );

    /* const response = await openai.createCompletion({
      //? what are these parameters??
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 5,
      temperature: 1,
      top_p: 1,
      n: 1,
      stream: false,
      logprobs: null,
      //stop: "\n",
    });
    console.log(` ${response.data.choices[0].text}`);
    res.status(200).send(response.data.choices[0]); */
  } catch (error) {
    if (error.response) {
      console.log(
        `Status Code ${error.response.status}: ${error.response.data.error.message}`
      );
    } else {
      console.log(error.message);
    }
  }
});

app.listen(8000, () => {
  console.log(`OpenAI server started on http://localhost:8000`);
});
