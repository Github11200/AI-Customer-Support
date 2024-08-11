"use client";
import { Textarea } from "@/components/ui/textarea"; // Adjust the import path as needed
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function ChatComponent() {
    const router = useRouter();
  
    const handleBack = () => {
      router.push('/');  
    };
  
    return (
      <div className="flex flex-col h-screen p-4">
        {/* Back Arrow Button */}
        <div className="mb-4">
          <Button onClick={handleBack} variant="ghost">
            <ArrowLeftIcon className="h-6 w-6" />
          </Button>
        </div>
  
        {/* Main chat area */}
        <div className="flex-grow overflow-y-auto mb-4">
          {/* This is where your chat messages will appear */}
        </div>
  
        {/* Input area at the bottom */}
        <div className="flex items-center">
          <Textarea
            placeholder="Type your message here..."
            className="flex-grow h-16 resize-none"
          />
          <Button className="ml-4 h-16">
            Send
          </Button>
        </div>
      </div>
    );
  }