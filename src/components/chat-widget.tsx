"use client";
import ChatHeader from "@/components/chat-header";
import ChatInput from "@/components/chat-input";
import React from "react";
import { TbMessageCircleQuestion } from "react-icons/tb";
import { useChat } from "ai/react";
import ChatMessages from "@/components/chat-messages";
import Image from "next/image";

const ChatWidget = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "api/chat",
  });

  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => {
    const updatedState = isOpen ? false : true;
    setIsOpen(updatedState);
  };

  return (
    <div className="fixed bottom-10 right-10">
      <div className="flex flex-col items-end">
        {/* Chat Panel */}
        {isOpen ? (
          <div className="w-[350px] flex flex-col shadow-md rounded-lg h-[600px] max-h-[70vh]">
            {/* Chat Header */}
            <ChatHeader />
            {/* Chat Messages */}
            <div className="flex-1 border overflow-auto no-scrollbar">
              {/* Messages */}
              <ChatMessages messages={messages} />
            </div>
            {/* Chat Footer */}
            <ChatInput
              handleInputChange={handleInputChange}
              input={input}
              handleSubmit={handleSubmit}
            />
          </div>
        ) : null}
        {/* Bot Icon */}
        <button
          onClick={toggle}
          className="mt-6 flex justify-center items-center cursor-pointer hover:scale-95 animate-in"
        >
          <Image
            src={"/chatbot.svg"}
            alt="chatbot icon"
            height={60}
            width={60}
          />
        </button>
      </div>
    </div>
  );
};

export default ChatWidget;
