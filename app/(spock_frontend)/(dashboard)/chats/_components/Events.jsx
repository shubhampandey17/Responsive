import React from 'react'

function Events() {
  return (
    <div className=" bg-lavenderblush p-1 rounded-mini my-2 font-poppins font-medium">
        <div className="flex justify-start">
        <div className="p-1">
          <img
            className="w-3.5 h-4"
            alt=""
            src="/icon-awesomecalendaralt.svg"
          />
        </div>
        <div className="flex ml-3">
          <div className="text-md mt-[2px]">Appointments</div>
          <div className="ml-28">
            <img
            className="cursor-pointer"
              alt=""
              src="/icon-materialnavigatenext.svg"
            />
          </div>
        </div>

        </div>
        <div>
          <p className="mx-6 mt-1 text-xs">
            What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing
            and typesetting industry
          </p>
        </div>
      </div>
  )
}

export default Events
