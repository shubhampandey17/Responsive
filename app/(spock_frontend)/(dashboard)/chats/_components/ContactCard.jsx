import React from "react";
import Message from "./Message";
import 'react-chat-elements/dist/main.css';
import { ChatItem } from 'react-chat-elements'
import { ChatList } from 'react-chat-elements'
import SearchBar from "./SearchBar";

const ContactCard = () => {
  return (
    <span className="font-poppins text-xs scale-90 md:block hidden">
      <div className=" my-1 mb-2 flex justify-between">
        <span className="font-semibold text-lg text-darkslategray mb-2"> Recent Messages</span>
        <div>
          <button className="rounded-[5px] bg-limegreen w-[41px] h-[41px] cursor-pointer">
            <img
              className="w-[16.81px] h-[16.85px]"
              alt=""
              src="/path-85.svg"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <SearchBar />
        <div className="h-[65vh] overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slategray px-2 py-2">
          <ChatList
            className='chat-list'
            dataSource={[
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'Franky Schmidt',
                subtitle: 'Hey whatsapp man',
                date: new Date(),
                unread: 10,
                muted: false,
                statusColor: 'lightgreen',
                statusColorType: 'badge',
              },
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'Doctor Dandamudi',
                subtitle: 'How are you doing?',
                date: new Date(),
                unread: 0,
              },
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'Channai Medicals',
                subtitle: 'Change the address to 113?',
                date: new Date(),
                unread: 0,
              },
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'visitor',
                subtitle: 'Hi the above ...?',
                date: new Date(),
                unread: 0,
              },
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'visitor',
                subtitle: 'Hi the above ...?',
                date: new Date(),
                unread: 0,
              },
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'visitor',
                subtitle: 'Hi the above ...?',
                date: new Date(),
                unread: 0,
              },
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'visitor',
                subtitle: 'Hi the above ...?',
                date: new Date(),
                unread: 0,
              },
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'visitor',
                subtitle: 'Hi the above ...?',
                date: new Date(),
                unread: 0,
              },
              {
                avatar: '/ellipse-73@2x.png',
                alt: 'Reactjs',
                title: 'visitor',
                subtitle: 'Hi the above ...?',
                date: new Date(),
                unread: 0,
              },
            ]} />
        </div>
      </div>

    </span>
  );
};

export default ContactCard;
