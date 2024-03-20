import Link from "next/link";
import { MdKeyboardArrowLeft } from "react-icons/md";
import CalendarComp from "./_components/CalendarComp";

const page = () => {
    return (
      <div className="w-fit m-5 rounded-lg font-poppins bg-slate-50">
        <div className="flex justify-start w-[92vw] h-16 space-x-96 bg-aliceblue items-center">
            <Link className="ml-4 flex  items-center no-underline" href={"/"}>
                <MdKeyboardArrowLeft className="text-blue-600"/>
                <div className=" text-blue-600 ml-1">Back</div>
            </Link>
          <div className="px-36 font-bold">SMS Campaign Calendar</div>
        </div>
        <div className="h-[78vh] mx-14 my-3">
          <div className="flex justify-end space-x-5 items-center py-4">
            <div className="rounded-md px-7 py-2 text-sm text-blue-400 border-solid border-2 border-aliceblue">
                November, 2023
            </div>
            <button className="rounded-md bg-blue-500 text-xs text-white px-4 py-3 cursor-pointer">
                Add New
            </button>
          </div>
          <div>
            {/* calander */}
            <CalendarComp />
          </div>
        </div>
      </div>
    );
  }
  
  export default page;
  