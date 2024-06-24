import React from "react";

const Chat = () => {
  return (
    <div className="absolute">
      <div className="fixed bottom-16 right-16 rounded-full bg-gradient-to-r from-red-300 to-orange-500 h-20 w-20 flex items-center justify-center">
        icon
      </div>

      <div className="bg-gradient-to-r from-indigo-400 to-blue-300 h-[600px] w-[400px] fixed bottom-24 right-20 flex flex-col justify-between">
        <div>
          <p className="p-8 text-2xl font-mono">ChatBot</p>
          <div className="bg-black border-t"></div>
        </div>

        <div className="flex justify-center p-4">
          <input
            className="bg-slate-200 h-12 w-full mx-4 rounded-sm"
            type="text"
            placeholder="type here"
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
