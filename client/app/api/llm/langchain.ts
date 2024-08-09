import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { CohereEmbeddings } from "@langchain/cohere";
import {
  RunnableParallel,
  RunnablePassthrough,
  RunnableLambda,
} from "@langchain/core/runnables";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { Pinecone } from "@pinecone-database/pinecone";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-pro",
  maxOutputTokens: 2048,
});

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});
const index = pc.index("customer-support");

let embeddings = new CohereEmbeddings({
  model: "multilingual-22-12",
});
