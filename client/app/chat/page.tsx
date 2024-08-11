
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
        {/* Back Arrow Button */}
        <div className="mb-4">
          <Button onClick={handleBack} variant="ghost">
            <ArrowLeftIcon className="h-6 w-6" />
          </Button>
        </div>
  
        {/* Main chat area */}
        <div className="flex-grow overflow-y-auto mb-4 p-4 bg-gray-100 rounded-lg shadow-inner">
          {/* Chat messages go here */}
        </div>
  
        {/* Input area at the bottom */}
        <div className="flex items-center p-2 bg-white border-t border-gray-200">
          <Textarea
            placeholder="Type your message here..."
            className="flex-grow h-16 resize-none border rounded-lg p-2"
          />
          <Button className="ml-4 h-16 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
            Send
          </Button>
        </div>
      </div>
    );
}
