import { ChatRequestOptions, Message } from "ai";
import React, { ChangeEvent, FormEvent } from "react";

type ChatInputProps = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  input: string;
  className?: string;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};
const ChatInput = ({
  handleInputChange,
  handleSubmit,
  input,
}: ChatInputProps) => {
  return (
    <div className="p-3 flex justify-center items-center border">
      <form className="w-full" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => {
            handleInputChange(e);
          }}
          className="p-2 rounded-md outline-none border-none w-full text-foreground"
          placeholder="write here..."
        />
      </form>
    </div>
  );
};

export default ChatInput;
