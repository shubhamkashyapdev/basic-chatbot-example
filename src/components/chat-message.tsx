import { cn } from "@/lib/utils";
import { Message } from "ai";
import React from "react";
import Markdown from "react-markdown";

type ChatMessageProps = {
  message: Message;
  isUserMessage: boolean;
};
const ChatMessage = ({ message, isUserMessage }: ChatMessageProps) => {
  return (
    <div className="chat-message" key={`${message.id}-${message.id}`}>
      <div
        className={cn("flex items-end", {
          "justify-end": isUserMessage,
        })}
      >
        <div
          className={cn(
            "flex flex-col space-y-3 text-sm max-w-xs mx-3 overflow-x-hidden",
            {
              "order-1 items-end": isUserMessage,
              "order-2 items-start": !isUserMessage,
            }
          )}
        >
          <div
            className={cn("px-4 py-3 rounded-lg", {
              "bg-blue-500 text-white": isUserMessage,
              "bg-gray-100 text-gray-900": !isUserMessage,
            })}
          >
            <Markdown>{message.content}</Markdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
