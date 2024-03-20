import React, { useState } from 'react'
import { FaRegSmile } from "react-icons/fa";
import { MessageList } from 'react-chat-elements'
import { SideBar } from 'react-chat-elements'
const messageListReferance = React.createRef();
import { Input, Button } from 'react-chat-elements'
const inputReferance = React.createRef()
import { AiOutlineSend } from "react-icons/ai";

import axios from 'axios';


const ChatWindow = () => {
    const [inputText, setInputText] = useState("");
    const [data, setData] = useState([]);
    // let data = [{
    //     position: 'right',
    //     type: 'text',
    //     titleColor: 'green',
    //     className: '',
    //     title: 'Franky Schmidt',
    //     text: 'Hello Doctor!',
    //     date: new Date("2022-03-25"),
    //     dateString: '02:52 pm',
    //     status: 'read',
    //     avatar: '/gt@2x.png'
    // },
    // {
    //     position: 'left',
    //     type: 'text',
    //     titleColor: 'blue',
    //     className: '',
    //     title: 'Dr. Dandamudi',
    //     text: 'Hello Doctor!',
    //     date: new Date(),
    //     avatar: '/gt@2x.png'
    // },
    // {
    //     position: 'left',
    //     type: 'text',
    //     titleColor: 'blue',
    //     className: '',
    //     title: 'Dr. Dandamudi',
    //     text: 'Hello Doctor!',
    //     date: new Date(),
    //     avatar: '/gt@2x.png'
    // },
    // {
    //     position: 'left',
    //     type: 'text',
    //     titleColor: 'blue',
    //     className: '',
    //     title: 'Dr. Dandamudi',
    //     text: 'Hello Doctor!',
    //     date: new Date(),
    //     avatar: '/gt@2x.png'
    // },
    // {
    //     position: 'left',
    //     type: 'text',
    //     titleColor: 'blue',
    //     className: '',
    //     title: 'Dr. Dandamudi',
    //     text: 'Hello Doctor!',
    //     date: new Date(),
    //     avatar: '/gt@2x.png'
    // },
    // {
    //     position: 'right',
    //     type: 'text',
    //     titleColor: 'green',
    //     className: '',
    //     title: 'Dr. Dandamudi',
    //     text: 'Hello Doctor!',
    //     date: new Date(),
    //     avatar: '/gt@2x.png'
    // },
    // {
    //     position: 'right',
    //     type: 'text',
    //     titleColor: 'blue',
    //     className: '',
    //     title: 'Dr. Dandamudi',
    //     text: 'Hello Doctor!',
    //     date: new Date(),
    //     avatar: '/gt@2x.png'
    // },]

    const sendDataToBackend = async (message) => {
        try {
            console.log(message)
            const response = await axios.post('http://localhost:3000/api/whatsapp', { message });
            console.log(response.data); // Handle the response data as needed
        } catch (error) {
            console.error('Error sending data:', error);
            // Handle the error
        }
    };

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSendClick = () => {
        const newMessage = {
            position: 'right', // Assuming it's the user's message
            type: 'text',
            titleColor: 'green', // Update with the appropriate color
            className: '',
            title: 'Franky Schmidt', // Update with the user's name
            text: inputText, // Use the input text
            date: new Date(),
            dateString: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
            status: 'sent', // Update with the appropriate status
            avatar: '/gt@2x.png' // Update with the user's avatar
        };

        const newData = [...data, newMessage];
        setData(newData);
        sendDataToBackend(inputText)
        setInputText("");
    };

    console.log(data)

    return (
        <div className='scale-100 mt-3 text-sm font-sm rounded-xl bg-whitesmoke-100 box-border max-w-screen-md h-fit border-[1px] border-solid border-gainsboro-200 font-poppins'>
            { /* chat window header */}
            <div className=" rounded-t-xl rounded-b-none bg-whitesmoke-200 box-border w-full h-fit border-[1px] border-solid border-gainsboro-200" >
                <div className='scale-90 flex items-center justify-start space-x-4 px-4 pt-1'>
                    <img
                        className=" top-[227px] left-[1371px] rounded-[50%] w-11 h-11 object-cover"
                        alt=""
                        src="/gt@2x.png"
                    />
                    <p> Franky Schmidt </p>
                </div>
            </div>
            {/* chat window body */}
            {/* <div className='flex flex-col px-4'>
                <div className="flex justify-center text-center text-lg font-medium text-darkgray my-3">
                    December 21, 2023
                </div>
                <div className='flex  justify-end items-center space-x-2'>
                    <div>
                        <div className="rounded-t-3xs rounded-br-none rounded-bl-3xs bg-limegreen max-w-fit max-h-fit px-3 py-1 " >
                            <p className="font-medium text-white text-center"> Hi, Dr. Dandamudi </p>
                        </div>
                        <div className="text-sm font-semibold font-sofia-pro text-silver text-right me-1 mt-2">
                            09:35
                        </div>
                    </div>
                    <img
                        className="rounded-[50%] w-11 h-11 object-cover"
                        alt="image is missing"
                        src="/gt@2x.png"
                    />
                </div>
                <div className='flex  justify-start items-center space-x-2'>
                    <img
                        className="rounded-[50%] w-11 h-11 object-cover"
                        alt=""
                        src="/gt@2x.png"
                    />

                    <div className=''>
                        <div className="rounded-t-3xs rounded-br-3xs rounded-bl-none bg-gainsboro-100 max-w-fit max-h-fit px-3 py-1" >
                            <p className="font-medium text-center"> Hello!
                            </p>
                        </div>
                        <div className="text-sm font-semibold font-sofia-pro text-silver text-left me-1 mt-2">
                            09:35
                        </div>
                    </div>
                </div>
            </div> */}
            <br />
            <div className=' md:mx-4 h-[47vh] mb-4 overflow-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-400 scrollbar-thumb-rounded'>
                <div className="flex justify-center text-center text-lg font-medium text-darkgray my-3">
                    December 21, 2023
                </div>
                <MessageList
                    referance={messageListReferance}
                    className='message-list'
                    lockable={true}
                    toBottomHeight={'100%'}
                    dataSource={data} />
            </div>
            { /* chat window status */}

            <div className='flex flex-row mx-4 justify-between items-center'>

                <div className='flex items-center space-x-1'>
                    <div className="text-sm font-semibold text-lightslategray text-right">
                        Send To
                    </div>
                    <div className='rounded-sm bg-lightgray-100 flex space-x-1 px-1 py-1'>
                        <button className="rounded-sm bg-pink flex items-center font-poppins space-x-1 px-2  text-center cursor-pointer" >
                            <img
                                className="w-[14.6px] h-[14.6px]"
                                alt=""
                                src="/group-17189.svg"
                            />
                            <div className="text-[13px] text-brown">
                                Patient
                            </div>
                        </button>
                        <button className='font-poppins rounded-sm bg-lightgray-100 flex items-center space-x-1 px-1 pe-3 text-center cursor-pointer'>
                            @ Internal
                        </button>
                    </div>
                </div>

                <div className='flex justify-center items-center space-x-1'>
                    <div className="text-sm font-semibold text-lightslategray text-right">
                        Channel Status :
                    </div>
                    <img
                        className="rounded-[50%] w-4 h-4"
                        alt=""
                        src="/ellipse-1327.svg"
                    />
                    { /*select menu */}
                    <select name="" id="" className='font-poppins'>
                        <option value="open">open</option>
                        <option value="close">closed</option>
                    </select>
                </div>
            </div>

            { /* chat window message input */}
            <div className='mx-4 my-4'>
                <div className="flex items-center justify-between space-x-1 rounded-[30px] bg-white box-border max-w-fit h- border-[1px] border-solid border-gainsboro-200" >
                    <input
                        className="px-3 font-medium font-poppins rounded-[30px] bg-white box-border w-[853px] h-[45px] border-[1px] border-solid border-e-0 border-t-0 border-b-0 border-gainsboro-200 outline-none"
                        type="text"
                        placeholder="Enter your message here"
                        value={inputText}
                        onChange={handleInputChange}
                    />
                    <div className='flex justify-center items-center space-x-3 px-3'>
                        <FaRegSmile className='w-[15px] h-[15px] text-darkgray cursor-pointer' />
                        <img
                            className="w-[15px] h-[15px] cursor-pointer"
                            alt=""
                            src="/paperclip.svg"
                        />
                        <div className="rounded-full bg-yellowgreen w-[30px] h-[30px] flex justify-center items-center text-center cursor-pointer">
                            {/* <img
                                className="h-[59.95%] w-[59.95%]"
                                alt=""
                                src="/path-76.svg"
                            /> */}

                            <AiOutlineSend className='text-white font-bold' onClick={handleSendClick} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end text-gray-100 px-5 py-2 text-xs">
                160 Characters / 1 Segment (Segment will depend on merge fields)
            </div>
            <div className='flex px-5 py-2 text-sm justify-start space-x-5 items-center'>
                <div className="cursor-pointer">
                    <img
                        className="w-[13px] h-[13x] cursor-pointer"
                        alt=""
                        src="/path-12433.svg"
                    />
                </div>
                <div className="cursor-pointer">
                    <img
                        className="w-[15px] h-[15px] cursor-pointer"
                        alt=""
                        src="/path-12200.svg"
                    />
                </div>
                <div className="cursor-pointer">
                    <img
                        className="w-[15px] h-[15px]"
                        alt=""
                        src="/path-12201.svg"
                    />
                </div>
            </div>
        </div>
    )
}

export default ChatWindow