

// "use client";
// import { useState, useEffect } from 'react';
// import Image from 'next/image'; // Import next/image
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { useRouter } from 'next/navigation';
// import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// export default function ChatComponent() {
//     const router = useRouter();
//     const [darkMode, setDarkMode] = useState(false);

//     const handleBack = () => {
//       router.push('/');
//     };

//     const toggleDarkMode = () => {
//       setDarkMode(!darkMode);
//     };

//     // Apply dark mode class to the body or html
//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);

//     return (
//       <div className="flex flex-col h-screen p-4 sm:p-6 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
//         {/* Header and Back Arrow Container */}
//         <div className="flex items-center mb-6">
//           <Button onClick={handleBack} variant="ghost" className="mr-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
//             <ArrowLeftIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
//           </Button>
//           <div className="flex-grow flex justify-center">
//             <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
//               LangChain Assistant
//             </h1>
//           </div>
//           {/* Dark Mode Toggle Icon */}
//           <Button onClick={toggleDarkMode} variant="ghost" className="p-2 ml-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
//             <Image 
//               src={darkMode ? '/sun-icon.svg' : '/moon-icon.svg'} 
//               alt="Toggle Dark Mode" 
//               width={24} 
//               height={24}
//               className="h-6 w-6"
//             />
//           </Button>
//         </div>

//         {/* Main chat area */}
//         <div className="flex-grow overflow-y-auto mb-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-inner">
//           {/* Messages */}
//           <div className="flex flex-col space-y-4">
//             {/* AI message */}
//             <div className="bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100 rounded-lg p-3 max-w-[75%] self-start">
//               <p>Hello! I’m LangChain Assistant, here to help you with any questions you have.</p>
//             </div>
//             {/* Client message */}
//             <div className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg p-3 max-w-[75%] self-end">
//               <p>Hi! I’m curious about the services you offer.</p>
//             </div>
//             {/* More messages can go here */}
//           </div>
//         </div>

//         {/* Input area at the bottom */}
//         <div className="flex items-center p-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-b-lg shadow-md">
//           <Textarea
//             placeholder="Type your message here..."
//             className="flex-grow h-16 resize-none border dark:border-gray-700 rounded-lg p-3 text-gray-700 dark:text-gray-100 dark:bg-gray-800"
//           />
//           <Button className="ml-4 h-16 bg-blue-600 dark:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
//             Send
//           </Button>
//         </div>
//       </div>
//     );
// }

// "use client";
// import { useState, useEffect } from 'react';
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { useRouter } from 'next/navigation';
// import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// export default function ChatComponent() {
//     const router = useRouter();
//     const [darkMode, setDarkMode] = useState(false);

//     const handleBack = () => {
//       router.push('/');
//     };

//     const toggleDarkMode = () => {
//       setDarkMode(!darkMode);
//     };

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);

//     return (
//       <div className="flex flex-col h-screen p-4 sm:p-6 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
//         {/* Header and Back Arrow Container */}
//         <div className="flex items-center mb-6">
//           <Button onClick={handleBack} variant="ghost" className="mr-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
//             <ArrowLeftIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
//           </Button>
//           <div className="flex-grow flex justify-center">
//             <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
//               LangChain Assistant
//             </h1>
//           </div>
//           {/* Dark Mode Toggle Icon */}
//           <Button onClick={toggleDarkMode} variant="ghost" className="p-2 ml-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
//             {/* SVG Icon */}
//             {darkMode ? (
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
//               </svg>
//             ) : (
//               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
//               </svg>
//             )}
//           </Button>
//         </div>

//         {/* Main chat area */}
//         <div className="flex-grow overflow-y-auto mb-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-inner">
//           {/* Messages */}
//           <div className="flex flex-col space-y-4">
//             {/* AI message */}
//             <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[75%] self-start">
//               <p>Hello! I’m LangChain Assistant, here to help you with any questions you have.</p>
//             </div>
//             {/* Client message */}
//             <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 max-w-[75%] self-end">
//               <p>Hi! I’m curious about the services you offer.</p>
//             </div>
//           </div>
//         </div>

//         {/* Input area at the bottom */}
//         <div className="flex items-center p-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-lg shadow-md">
//           <Textarea
//             placeholder="Type your message here..."
//             className="flex-grow h-16 resize-none border rounded-lg p-3 text-gray-700 dark:text-gray-200 dark:bg-gray-900"
//           />
//           <Button className="ml-4 h-16 bg-blue-600 dark:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
//             Send
//           </Button>
//         </div>
//       </div>
//     );
// }

// "use client";
// import { useState, useEffect } from "react";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { useRouter } from 'next/navigation';
// import { ArrowLeftIcon } from '@heroicons/react/24/outline';
// import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

// export default function ChatComponent() {
//     const router = useRouter();
//     const [darkMode, setDarkMode] = useState(false);
//     const [messages, setMessages] = useState([]); // Stores the chat messages
//     const [userInput, setUserInput] = useState(""); // Stores the user's current input
//     const [chat, setChat] = useState(null); // Stores the chat instance
//     const [error, setError] = useState(null); // Stores any error messages

//     const API_KEY = "AIzaSyC1hKjGdS_txxTCLJE3Z6jEw2kEKiJ0Nig";
//     const MODEL_NAME = "gemini-1.5-flash";

//     const genAI = new GoogleGenerativeAI(API_KEY); // Initialize GoogleGenerativeAI with the provided API key

//     const generationConfig = {
//         temperature: 0.9, // Controls randomness in output; higher means more diverse outputs
//         topK: 1, // Limits to the top K most likely tokens
//         topP: 1, // Limits to a cumulative probability of the top tokens
//         maxOutputTokens: 2048, // Maximum number of tokens in the output
//     };

//     const safetySettings = [
//         {
//             category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//             threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//         {
//             category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//             threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
//         },
//     ];

//     useEffect(() => {
//         const initChat = async () => {
//             try {
//                 const newChat = await genAI
//                     .getGenerativeModel({ model: MODEL_NAME })
//                     .startChat({
//                         generationConfig,
//                         safetySettings,
//                         history: messages.map((msg) => ({
//                             text: msg.text,
//                             role: msg.role,
//                         })),
//                     });
//                 setChat(newChat);
//             } catch (error) {
//                 // setError("Failed to initialize chat. Please try again.");
//             }
//         };

//         initChat();
//     }, [messages]);

//     const handleSendMessage = async () => {
//         try {
//             const userMessage = {
//                 text: userInput,
//                 role: "user",
//                 timeStamp: new Date(),
//             };

//             setMessages((prevMessages) => [...prevMessages, userMessage]);
//             setUserInput("");

//             if (chat) {
//                 const result = await chat.sendMessage(userInput);
//                 const botMessage = {
//                     text: result.response.text(),
//                     role: "bot",
//                     timeStamp: new Date(),
//                 };

//                 setMessages((prevMessages) => [...prevMessages, botMessage]);
//             }
//         } catch (error) {
//             setError("Failed to send message. Please try again.");
//         }
//     };

//     const handleBack = () => {
//         router.push('/');
//     };

//     const toggleDarkMode = () => {
//         setDarkMode(!darkMode);
//     };

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add('dark');
//         } else {
//             document.documentElement.classList.remove('dark');
//         }
//     }, [darkMode]);

//     return (
//         <div className="flex flex-col h-screen p-4 sm:p-6 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
//             <div className="flex items-center mb-6">
//                 <Button onClick={handleBack} variant="ghost" className="mr-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
//                     <ArrowLeftIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
//                 </Button>
//                 <div className="flex-grow flex justify-center">
//                     <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
//                         LangChain Assistant
//                     </h1>
//                 </div>
//                 <Button onClick={toggleDarkMode} variant="ghost" className="p-2 ml-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full">
//                     {darkMode ? (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
//                         </svg>
//                     ) : (
//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
//                         </svg>
//                     )}
//                 </Button>
//             </div>

//             <div className="flex-grow overflow-y-auto mb-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-inner">
//                 <div className="flex flex-col space-y-4">
//                     {messages.map((msg, index) => (
//                         <div
//                             key={index}
//                             className={`rounded-lg p-3 max-w-[75%] ${
//                                 msg.role === "user" ? "self-end bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" : "self-start bg-blue-600 text-white"
//                             }`}
//                         >
//                             <p>{msg.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="flex items-center p-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-lg shadow-md">
//                 <Textarea
//                     placeholder="Type your message here..."
//                     value={userInput}
//                     onChange={(e) => setUserInput(e.target.value)}
//                     onKeyDown={(e) => {
//                         if (e.key === "Enter") {
//                             e.preventDefault();
//                             handleSendMessage();
//                         }
//                     }}
//                     className="flex-grow h-16 resize-none border rounded-lg p-3 text-gray-700 dark:text-gray-200 dark:bg-gray-900"
//                 />
//                 <Button
//                     onClick={handleSendMessage}
//                     className="ml-4 h-16 bg-blue-600 dark:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300"
//                 >
//                     Send
//                 </Button>
//             </div>
//             {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
//         </div>
//     );
// }
"use client";
import { useState, useEffect } from "react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

export default function ChatComponent() {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const handleBack = () => {
    router.push("/");
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col h-screen p-4 sm:p-6 bg-gray-100 dark:bg-black text-gray-900 dark:text-white">
      {/* Header and Back Arrow Container */}
      <div className="flex items-center mb-6">
        <Button
          onClick={handleBack}
          variant="ghost"
          className="mr-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          <ArrowLeftIcon className="h-6 w-6 text-gray-900 dark:text-gray-100" />
        </Button>
        <div className="flex-grow flex justify-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100">
            LangChain Assistant
          </h1>
        </div>
        {/* Dark Mode Toggle Icon */}
        <Button
          onClick={toggleDarkMode}
          variant="ghost"
          className="p-2 ml-4 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
        >
          {/* SVG Icon */}
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          )}
        </Button>
      </div>

      {/* Main chat area */}
      <div className="flex-grow overflow-y-auto mb-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-inner">
        {/* Messages */}
        <div className="flex flex-col space-y-4">
          {/* AI message */}
          <div className="bg-blue-600 text-white rounded-lg p-3 max-w-[75%] self-start">
            <p>
              Hello! I’m LangChain Assistant, here to help you with any
              questions you have.
            </p>
          </div>
          {/* Client message */}
          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 max-w-[75%] self-end">
            <p>Hi! I’m curious about the services you offer.</p>
          </div>
        </div>
      </div>

      {/* Input area at the bottom */}
      <div className="flex items-center p-2 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 rounded-b-lg shadow-md">
        <Textarea
          placeholder="Type your message here..."
          className="flex-grow h-16 resize-none border rounded-lg p-3 text-gray-700 dark:text-gray-200 dark:bg-gray-900"
        />
        <Button className="ml-4 h-16 bg-blue-600 dark:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
          Send
        </Button>
      </div>
    </div>
  );
}
