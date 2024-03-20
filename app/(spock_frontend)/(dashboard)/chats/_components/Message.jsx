import React from "react";
import 'react-chat-elements/dist/main.css';
import { ChatItem } from 'react-chat-elements'

function Message() {
  return (
    <div className="flex justify-between items-center rounded-3xs bg-whitesmoke-100 box-border w-[330px] h-[71px] text-darkslategray border-[1px] border-solid border-gainsboro-200">
      <div className="flex justify-between space-x-2 items-center">
        <div className="relative border-gray-400 border ">
          {/* profile pic */}
          <img
            className="rounded-[50%] max-h-full w-11 object-cover"
            alt=""
            src="/ellipse-73@2x.png"
          />
          {/* status */}
          <img
            className="absolute bottom-0 right-1 rounded-[50%] w-4 h-4"
            alt=""
            src="/ellipse-81.svg"
          />
        </div>
        <div>
          <div className="text-base font-medium">Franky Schmidt</div>
          <div className=" text-lightslategray">Me: What does this dummy…</div>
        </div>
      </div>
      <div className="rounded-full bg-lightgray-200 h-5 w-5 text-center me-2 text-white">
        3
      </div>
    </div>
    
  );
}

export default Message;
