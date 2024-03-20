import React, { useState } from "react";
import Events from "./Events";

const Appointments = () => {
    const [eventButton,setEventButton] = useState(true);
    const [signalButton,setSignalButton] = useState(false);
    const [attachmentsButton,setAttachmentsButton] = useState(false);

    const handleEvent = () =>{
        setEventButton(true);
        setSignalButton(false);
        setAttachmentsButton(false);
    }

    const handleSignal = () =>{
        setEventButton(false);
        setSignalButton(true);
        setAttachmentsButton(false);
    }

    const handleAttachments = () =>{
        setAttachmentsButton(true);
        setEventButton(false);
        setSignalButton(false);
    }

  return (
    <div>
      <div className="flex justify-center items-center font-poppins pl-1">
        <div>
          <div className="text-sm uppercase  font-bold cursor-pointer font-poppins" onClick={handleEvent}>
            EVENTS
          </div>
          <div className={`rounded-l-3xs my-2 ${eventButton ? "bg-blue-400" : " bg-whitesmoke-300"} h-1.5`}></div>
        </div>
        <div>
          <div className="text-sm mx-9 uppercase font-bold cursor-pointer font-poppins " onClick={handleSignal}>
            SIGNALS
          </div >
          <div className={`my-2 ${signalButton ? "bg-blue-400" : " bg-whitesmoke-300"} h-1.5`}></div>
        </div>
        <div>
          <div className="text-sm uppercase font-bold cursor-pointer font-poppins" onClick={handleAttachments}>
            ATTACHMENTS
          </div >
          <div className={`rounded-r-3xs ${attachmentsButton ? "bg-blue-400" : " bg-whitesmoke-300"} my-2 h-1.5`}></div>
        </div>
      </div>
    
        <div className="h-[30vh] overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-300 ">
            <Events />
            <Events />
            <Events />
        </div>
    </div>
  );
};

export default Appointments;
