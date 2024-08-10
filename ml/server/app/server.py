from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from langserve import add_routes
from .rag import run_query
from fastapi.middleware.cors import CORSMiddleware
import json
from langchain_core.runnables import RunnableLambda
import uvicorn

app = FastAPI()

# Set all CORS enabled origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)


@app.get("/")
async def GET(request: Request):
    return {"hi": "Hi"}

wrapped_function = RunnableLambda(run_query)
chain = wrapped_function
add_routes(app, chain, path="/query")

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
