"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import { Message } from "ai";
import ChatMessage from "@/components/chat-message";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {
  messages: Message[];
}

const ChatMessages = ({ className, ...props }: ChatMessagesProps) => {
  const inverseMessages = [...props.messages].reverse();

  return (
    <div
      {...props}
      className={cn(
        "flex flex-col-reverse gap-3 overflow-y-auto flex-grow py-3 no-scrollbar",
        className
      )}
    >
      <div className="flex-1 flex-grow" />
      {inverseMessages.map((message) => {
        const isUserMessage = message.role === "user";
        return (
          <ChatMessage
            key={message.id}
            message={message}
            isUserMessage={isUserMessage}
          />
        );
      })}
    </div>
  );
};

export default ChatMessages;
