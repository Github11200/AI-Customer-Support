import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { TaskType } from "@google/generative-ai";
import { OllamaEmbeddings } from "@langchain/community/embeddings/ollama";

export async function GET() {
  return new Response(JSON.stringify({ hi: "Hello World" }));
}
