import React from "react";
import ContactCard from "./ContactCard";
import ProfileCard from "./ProfileCard";

function MessageCard() {
  return (
    <div className="scale-95 flex flex-col mx-1">
      <ProfileCard />
      <ContactCard />
    </div>
  );
}

export default MessageCard;
