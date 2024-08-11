'use client';

import { Button } from "@/components/ui/button";
<<<<<<< HEAD
import { Card } from "@/components/ui/card";

// import { useState, useEffect } from "react";
// import {
//   GoogleGenerativeAI,
//   HarmCategory,
//   HarmBlockThreshold,
// } from "@google/generative-ai";
// import { ModeToggle } from "@/components/theme-mode-toggle";
// import { Button } from "@/components/ui/button";

// export default function Home() {
//   const [messages, setMessages] = useState([]); // Stores the chat messages
//   const [userInput, setUserInput] = useState(""); // Stores the user's current input
//   const [chat, setChat] = useState(null); // Stores the chat instance
//   const [theme, setTheme] = useState("light"); // Manages the theme state
//   const [error, setError] = useState(null); // Stores any error messages

//   const API_KEY = "AIzaSyC1hKjGdS_txxTCLJE3Z6jEw2kEKiJ0Nig";
//   const MODEL_NAME = "gemini-1.5-flash";

//   const genAI = new GoogleGenerativeAI(API_KEY); // Initialize GoogleGenerativeAI with the provided API key

//   const generationConfig = {
//     temperature: 0.9, // Controls randomness in output; higher means more diverse outputs
//     topK: 1, // Limits to the top K most likely tokens
//     topP: 1, // Limits to a cumulative probability of the top tokens
//     maxOutputTokens: 2048, // Maximum number of tokens in the output
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//       threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//     },
//   ];

//   useEffect(() => {
//     const initChat = async () => {
//       try {
//         // Initializes a new chat session with the model
//         const newChat = await genAI
//           .getGenerativeModel({ model: MODEL_NAME })
//           .startChat({
//             generationConfig, // Passes the generation configuration
//             safetySettings, // Passes safety settings to prevent harmful outputs
//             history: messages.map((msg) => ({
//               text: msg.text, // Maps message text
//               role: msg.role, // Maps user or bot role
//             })),
//           });
//         setChat(newChat); // Sets the chat session to state
//       } catch (error) {
//         setError("Failed to initialize chat. Please try again.");
//       }
//     };

//     initChat(); // Call the initChat function when the component mounts
//   }, [messages]); // Dependencies: this will rerun if 'messages' changes

//   const handleSendMessage = async () => {
//     try {
//       const userMessage = {
//         text: userInput,
//         role: "user",
//         timeStamp: new Date(),
//       };

//       // Adds the user's message to the state and clears the input field
//       setMessages((prevMessages) => [...prevMessages, userMessage]);
//       setUserInput("");

//       if (chat) {
//         const result = await chat.sendMessage(userInput); // Sends the message to the AI
//         const botMessage = {
//           text: result.response.text(), // Gets the bot's response text
//           role: "bot",
//           timeStamp: new Date(),
//         };

//         // Adds the bot's response to the state
//         setMessages((prevMessages) => [...prevMessages, botMessage]);
//       }
//     } catch (error) {
//       setError("Failed to send message. Please try again.");
//     }
//   };

//   // Handles the theme change event
//   const handleThemeChange = (e) => {
//     setTheme(e.target.value);
//   };

//   // Returns theme colors based on the current theme
//   const getThemeColors = () => {
//     switch (theme) {
//       case "light":
//         return {
//           primary: "bg-white",
//           secondary: "bg-gray-100",
//           accent: "bg-blue-500",
//           text: "text-gray-800",
//         };
//       case "dark":
//         return {
//           primary: "bg-black",
//           secondary: "bg-gray-800",
//           accent: "bg-yellow-500",
//           text: "text-white",
//         };
//       default:
//         return {
//           primary: "bg-white",
//           secondary: "bg-gray-100",
//           accent: "bg-blue-500",
//           text: "text-gray-800",
//         };
//     }
//   };

//   // Handles 'Enter' key press to send the message
//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault(); // Prevents the default behavior of adding a new line
//       handleSendMessage(); // Calls the send message function
//     }
//   };

//   return (
//     <div className={`flex flex-col h-screen p-4`}>
//       <div className="absolute right-4">
//         <ModeToggle />
//       </div>
//       <div className="flex justify-between items-center mb-4">
//         <h1 className={`text-2xl font-bold `}>AI Customer Assistant</h1>
//       </div>
//       <div className={`flex-1 overflow-y-auto  rounded-md p-2`}>
//         {messages.map((msg, index) => (
//           <div
//             key={index}
//             className={`mb-4 ${
//               msg.role === "user" ? "text-right" : "text-left"
//             }`}
//           >
//             <span className={`p-2 rounded-lg`}>{msg.text}</span>
//             <p className={`text-xs mt-1`}>
//               {msg.role === "bot" ? "Bot" : "You"} -{" "}
//               {msg.timeStamp.toLocaleTimeString()}
//             </p>
//           </div>
//         ))}
//       </div>
//       {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
//       <div className="flex items-center mt-4">
//         <input
//           type="text"
//           placeholder="Type your message..."
//           value={userInput}
//           onChange={(e) => setUserInput(e.target.value)}
//           onKeyDown={handleKeyPress}
//           className={`flex-1 p-2 rounded-l-md border-t border-b border-l
//           focus:outline-none`}
//         />
//         <Button
//           onClick={handleSendMessage}
//           className={`p-2 text-white rounded-r-md hover:bg-opacity-80 focus:outline-none`}
//         >
//           Send
//         </Button>
//       </div>
//     </div>
//   );
// }


import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
  import { useRouter } from 'next/navigation';
  import { useEffect } from 'react';
  
  export default function Landing(){

    const router = useRouter();

  const handleStartChatting = () => {
    router.push('/chat'); // Ensure this path matches the actual location of pages.tsx
  };

    return(
      <main className="flex justify-center items-center min-h-screen " style={{ backgroundColor: '#0c4a6e' }}>
        <Card className="w-full max-w-sm p-6 border border-black">
          <CardHeader className="text-center">
            <CardTitle>Instant Knowledge</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center items-center text-center">
            <p>Meet <strong>Langchain Assistant</strong>, your AI companion for quick, accurate answers on the spot about building applications concenring LLM's,managing workflows and much more...</p>
          </CardContent>
          <Button variant="outline" className="w-full" onClick={handleStartChatting}>
          Start Chatting 
          <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
        </Button>
        </Card>
  
      </main>
  
    );
  
  }
=======
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
>>>>>>> 4cc3a0ca7527aaba0418f0de73054372ec2727db
