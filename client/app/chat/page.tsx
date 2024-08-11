"use client";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ChatComponent() {
    const router = useRouter();
  
    const handleBack = () => {
      router.push('/');  
    };
    
  
    return (
      <div className="flex flex-col h-screen p-4 sm:p-6">
        {/* Header and Back Arrow Container */}
        <div className="flex items-center mb-6">
          <Button onClick={handleBack} variant="ghost" className="mr-4 p-2 hover:bg-gray-200 rounded-full">
            <ArrowLeftIcon className="h-6 w-6" />
          </Button>
          <div className="flex-grow flex justify-center">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              LangChain Assistant
            </h1>
          </div>
        </div>
  

        {/* Main chat area */}
        <div className="flex-grow overflow-y-auto mb-6 p-4 bg-gray-100 rounded-lg shadow-inner">
          {/* Messages */}
          <div className="flex flex-col space-y-4">
            {/* AI message */}
            <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[75%] self-start">
              <p>Hello! I’m LangChain Assistant, here to help you with any questions you have.</p>
            </div>
            {/* Client message */}
            <div className="bg-white text-gray-900 rounded-lg p-3 max-w-[75%] self-end">
              <p>Hi! I’m curious about the services you offer.</p>
            </div>
            {/* More messages can go here */}
          </div>
        </div>


  
        {/* Input area at the bottom */}
        <div className="flex items-center p-2 bg-white border-t border-gray-200 rounded-b-lg shadow-md">
          <Textarea
            placeholder="Type your message here..."
            className="flex-grow h-16 resize-none border rounded-lg p-3 text-gray-700"
          />
          <Button className="ml-4 h-16 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Send
          </Button>
        </div>
      </div>
    );
}

