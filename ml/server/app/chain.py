from langchain_community.chat_models import ChatOpenAI
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_core.output_parsers import StrOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_core.runnables import RunnableParallel, RunnablePassthrough
from langchain_community.chat_models import ChatOpenAI
from langchain_pinecone import PineconeVectorStore
from dotenv import load_dotenv

load_dotenv()

OPEN_ROUTER_API_KEY = os.getenv("OPEN_ROUTER_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
print(PINECONE_API_KEY)

hf_embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/bert-large-nli-max-tokens")
vectorstore = PineconeVectorStore(
    index_name="customer-support", embedding=hf_embeddings)
vectorstore = vectorstore.from_existing_index(index_name="customer-support",
                                              embedding=hf_embeddings)

retriever = vectorstore.as_retriever()


# RAG
openrouter_client = ChatOpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key="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"
)

vectorstore = PineconeVectorStore(
    index_name="customer-support", embedding=hf_embeddings)

index_name = 'customer-support'
namespace = "langchain-docs"

template = """Answer the question based only on the following context:
{context}
Question: {question}"""

prompt = ChatPromptTemplate.from_template(template)

retreiver = vectorstore.as_retriever()

chain = (
    RunnableParallel({"context": retreiver, "question": RunnablePassthrough()})
    | prompt
    | openrouter_client
    | StrOutputParser()
)

chain.invoke("Tell me about jonas")
