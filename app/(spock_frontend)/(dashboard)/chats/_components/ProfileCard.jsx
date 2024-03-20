import React from 'react'

const ProfileCard = () => {
    return (
        <div className=' py-1 pb-2 px-4 box-border text-darkslategray border-b-[1px] border-solid border-gainsboro-200 md:block hidden'>
            <div className='flex items-center space-x-4'>
                <div className='relative border-gray-400 border '>
                    {/* profile pic */}
                    <img
                        className=" rounded-[50%] w-[60px] h-[60px] object-cover"
                        alt=""
                        src="/ellipse-1417@2x.png"
                    />
                    {/* status */}
                    <img
                        className="absolute bottom-0 right-1 rounded-[50%] w-4 h-4"
                        alt=""
                        src="/ellipse-104.svg"
                    />
                </div>
                <div className="text-xs text-darkslateblue-100 font-poppins ">
                    <div className="text-sm flex flex-col">
                        <div className='flex justify-between items-center'>
                            <div className="text-brown">
                                Welcome
                            </div>
                            <img
                                className="w-[17.01px] h-[15.12px] cursor-pointer"
                                alt=""
                                src="/icon-awesomeedit.svg"
                            />
                        </div>
                        {/* User name */}
                        <div className=" bottom-[0px] left-[0px] leading-[18px] font-semibold">
                            Front office Sam
                        </div>

                    </div>
                    <div className="">
                        <div className="tracking-[0.28px] leading-[18px] font-light">
                            <p className="m-0">Pre- Production Release Test</p>
                        </div>
                        <div className='flex items-center space-x-1'>
                            {/* icon */}
                            <img
                                className=""
                                alt=""
                                src="/icon-materiallocationon.svg"
                            />
                            {/*logged in pc name  */}
                            <div className=" bottom-[2px] left-[12px] text-[11px] tracking-[0.22px]">
                                Battle Creek PC (CST)
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard