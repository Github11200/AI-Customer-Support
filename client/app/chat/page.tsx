"use client";
import { Textarea } from "@/components/ui/textarea"; // Adjust the import path as needed

export default function ChatComponent() {
  return (
    <div className="p-4">
      <Textarea
        placeholder="Type your message here..."
        className="w-full h-24 resize-none"
      />
    </div>
  );
}