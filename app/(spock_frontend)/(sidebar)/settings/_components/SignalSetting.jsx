import Link from "next/link";
import Slider from "./Slider";

const items = [
    'Notes & Attachments',
    'Add/Change Lines',
    'Notes & Attachments',
]

const SignalSetting = () => {
    return (
        <div>
            <div className="scale-90 text-sm font-poppins">
                <div className="rounded-xl bg-darkslateblue-100 w-fit h-fit flex flex-col  justify-center  gap-5 py-5 px-4" >
                    <div className="flex flex-row justify-between space-x-4">
                        <img
                            className="w-[18px] h-[18px]"
                            alt=""
                            src="/info.svg"
                        />
                        <div className="flex flex-col gap-4">
                            {
                                items.map((item) => {
                                    return (
                                        <div className="flex justify-between items-center space-x-5">
                                            <div className="">
                                                <div className="text-white cursor-pointer no-underline">
                                                    {item}
                                                </div>
                                            </div>
                                            <div className="flex justify-center items-center" >
                                                <Slider />
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignalSetting