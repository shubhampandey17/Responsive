import React, { useEffect } from 'react'

// patient info card
const PatientInfo = () => {

    const details = [
        {
            name: "Sex",
            value: "Female"
        },
        {
            name: "DOB",
            value: "22/05/1997"
        },
        {
            name: "Language",
            value: "English"
        },
        {
            name: "Preferred Contact",
            value: "97338244563"
        },
        {
            name: "Texting Allowed",
            value: "Yes"
        },
        {
            name: "SMS Status",
            value: "Opt-In"
        },
        {
            name: "Portal Status",
            value: "Unenrolled"
        }

    ]

    // use tailwind css

    return (
        <div className='text-xs flex flex-col font-poppins bg-lavender rounded-sm mt-2 py-2 h-fit'>
            <div className='flex space-x-3 items-center'>
                <div className="rounded-mini " />
                <img
                    className="rounded-[50%] w-11 h-11 object-cover"
                    alt=""
                    src="/ellipse-73@2x.png"
                />
                <div className=" font-semibold text-darkslategray">
                    Franky Schmidt
                </div>
            </div>
            <div className='flex flex-col justify-center px-3'>
                {/* <div className="leading-[30px] flex justify-between space-x-16 ">
                    <div className="m-0">Sex</div>
                    <div>:</div>
                    <div className="m-0">Female</div>
                </div> */}
                {
                    details.map((detail) => {
                        return (
                            <div className="leading-[30px] flex justify-between space-x-10">
                                <div className="m-0">{detail.name}</div>
                                {/* <div className="m-0">:</div> */}
                                <div className="m-0">{detail.value}</div>
                            </div>
                        )
                    })
                }
                {/* <div className=" leading-[30px]">

                    <div className="m-0">DOB</div>
                    <div className="m-0">Language</div>
                    <div className="m-0">Preferred Contact</div>
                    <div className="m-0">Texting Allowed</div>
                    <div className="m-0">SMS Status</div>
                    <div className="m-0">Portal Status</div>
                </div>
                <div>
                    <div className="m-0">:</div>
                    <div className="m-0">:</div>
                    <div className="m-0">:</div>
                    <div className="m-0">:</div>
                    <div className="m-0">:</div>
                    <div className="m-0">:</div>
                    <div className="m-0">:</div>
                </div>
                <div className="leading-[30px]">
                    <div className="m-0">Female</div>
                    <div className="m-0">07-06-1993</div>
                    <div className="m-0">English</div>
                    <div className="m-0">97338244563</div>
                    <div className="m-0">9747103004</div>
                    <div className="m-0">Opt-In</div>
                    <div className="m-0">Unenrolled</div>
                </div> */}
            </div>
        </div>
    )
}

export default PatientInfo