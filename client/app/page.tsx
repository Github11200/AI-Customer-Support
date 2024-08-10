'use client';

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center p-4 sm:p-6">
      <Card className="w-full max-w-md sm:max-w-lg bg-white shadow-2xl rounded-lg transform transition duration-500 hover:scale-105">
        <CardHeader className="text-center p-4 sm:p-6">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Instant Knowledge!
          </h1>
        </CardHeader>
        <CardContent className="text-center p-4 sm:p-6">
          <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
            Meet <span className="font-semibold">Langchain Assistant</span>, your AI companion for quick and accurate answers about building applications, connecting LLMs, managing workflows, and more...
          </p>
          <Link
            href="/lib/gemini"
            className="inline-block"
          >
            <Button
              className="bg-blue-600 text-white text-base sm:text-lg font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Start Chatting ➜
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
