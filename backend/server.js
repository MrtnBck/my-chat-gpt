import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_KEY,
});

const openai = new OpenAIApi(configuration);

console.log(process.env.OPENAI_KEY);
const app = express();
app.use(cors());
app.use(express.json());

app.listen(8000, () => {
  console.log(`App is running... `);
});
