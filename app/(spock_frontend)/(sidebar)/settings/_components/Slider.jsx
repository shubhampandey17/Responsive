"use client"
import { useState } from "react"
const Slider = () => {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className={"relative bg-gray-50 rounded-xl h-[19px] w-[40px] flex items-center cursor-pointer justify-" + (active ? "start" : "end")} onClick={handleClick}>
            {
                active ? <img src="/ellipse-1366.svg" alt="" className="absolute w-[18px] h-[18px]" /> : <img src="/slider_off.svg" alt="" className="absolute w-[18px] h-[18px]" />
            }
        </div>
    )
}

export default Slider