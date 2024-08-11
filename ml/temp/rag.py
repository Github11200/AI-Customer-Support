from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Pinecone
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.document_loaders import YoutubeLoader
from langchain_pinecone import PineconeVectorStore
from pinecone import Pinecone
from dotenv import load_dotenv
from openai import OpenAI
import tiktoken
import os
from pinecone import Pinecone

load_dotenv()

OPEN_ROUTER_API_KEY = os.getenv("OPEN_ROUTER_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
INDEX_NAME = 'customer-support'
NAMESPACE = "langchain-docs"

print("Loaded keys!")

# Hugging face embeddings
hf_embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/bert-large-nli-max-tokens")

# Free Llama 3.1 API via OpenRouter
# Use this instead of OpenAI if you don't have an OpenAI account with credits

openrouter_client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPEN_ROUTER_API_KEY
)

tokenizer = tiktoken.get_encoding('cl100k_base')

print("Loaded embeddings, model, and tokenizer!")


def tiktoken_length(text):
    tokens = tokenizer.encode(text, disallowed_special=())
    return len(tokens)


text_splitter = RecursiveCharacterTextSplitter(chunk_size=2000,
                                               chunk_overlap=100,
                                               length_function=tiktoken_length)

print("Loaded text splitter!")

loader = YoutubeLoader.from_youtube_url(
    "https://www.youtube.com/watch?v=WA9gVKKPsBo", add_video_info=True)
data = loader.load()
texts = text_splitter.split_documents(data)

print("Loaded texts!")

# Initialize
pc = Pinecone(api_key=PINECONE_API_KEY)
pinecone_index = pc.Index(INDEX_NAME)

print("Loaded pinecone index!")


def run_query(prompt: str):
    query_embeddings = hf_embeddings.embed_query(prompt)
    top_matches = pinecone_index.query(
        vector=query_embeddings, top_k=10, include_metadata=True, namespace=NAMESPACE)

    contexts = [item['metadata']['text'] for item in top_matches['matches']]
    augmented_query = "<CONTEXT>\n" + \
        "\n\n-------\n\n".join(contexts) + \
        "\n--------\n</CONTEXT>\n\n\n\nMY QUESTION:\n" + prompt
    primer = f"""You are a personal assistant. Answer any questions that I have about the YouTube video provided.
  You always answer questions based only on the information you have been provided.
  """

    res = openrouter_client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": primer},
            {"role": "user", "content": augmented_query}
        ]
    )

    answer = res.choices[0].message.content
    return answer
