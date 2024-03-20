"use client"
import React from 'react'
import MessageCard from './_components/MessageCard'
import ChatWindow from './_components/ChatWindow'
import PatientSection from './_components/PatientSection'



const page = () => {
    return (
        <div className="w-full flex justify-center space-x-2">
            <MessageCard />
            <ChatWindow />
            <PatientSection />
        </div>
    )
}

export default page