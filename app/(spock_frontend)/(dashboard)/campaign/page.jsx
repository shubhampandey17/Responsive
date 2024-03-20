"use client";

const Screen1 = () => {
  return (
    <div className="font-poppins h-screen w-screen  bg-lavender">
      <div className="absolute top-[15px] left-[83px] rounded-4xs  w-[1250px] h-[70px] bg-white" />

      <div className="absolute top-[33px] left-[600px] text-2xl leading-[33px] font-semibold">
        Add New Campaign
      </div>

      <div className="absolute top-[33px] left-[120px] text-2xl leading-[33px] font-medium text-dodgerblue cursor-pointer">
        {" "}
        {"<"}
        {"\u00A0"} Back{" "}
      </div>

      {/* Form */}

      <main className="relative left-[80px] top-[160px] grid grid-cols-2 gap-x-[60px] gap-y-9 px-20 w-[900px]">
        <div className="flex flex-row mb-4">
          <label className="mr-4 text-gray-800 font-semibold w-[170px]">
            Record Type ID
            <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="------------------Select-----------------"
            className="border border-gray-300 w-[215px] px-2 py-3 flex-grow focus:outline-none focus:border-blue-500 rounded-md"
          />
        </div>

        <div className="flex flex-row mb-4">
          <label className="mr-4 text-gray-800 font-semibold w-[170px]">
            Owner ID
            <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            placeholder="------------------Select------------------"
            className="border border-gray-300 w-[215px] px-2 py-3 flex-grow focus:outline-none focus:border-blue-500 rounded-md"
          />
        </div>

        <div className="flex flex-row mb-4">
          <label className="mr-4 text-gray-800 font-semibold w-[170px]">
            Region
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="----------Select your region----------"
            className="border border-gray-300 w-[215px] px-2 py-3 flex-grow focus:outline-none focus:border-blue-500 rounded-md"
          />
        </div>

        <div className="flex flex-row mb-4">
          <label className="mr-4 text-gray-800 font-semibold w-[170px]">
            Campaign Name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Eg: X mas wish"
            className="border border-gray-300 w-[215px] px-2 py-2 flex-grow focus:outline-none focus:border-blue-500 rounded-md"
          />
        </div>

        <div className="flex flex-row mb-4 col-span-2">
          <label className="mr-4 text-gray-800 font-semibold w-[170px]">
            Campaign <br />
            Description
            <span className="text-red-500">*</span>
          </label>
          <textarea
            className="border border-gray-300 px-4 py-3 flex-grow focus:outline-none focus:border-blue-500 rounded-md"
            rows="5"
            cols="7"
          ></textarea>
        </div>

        <div className="flex space-x-4 relative left-[660px] bottom-4">
          <button className="px-10 py-2.5 bg-blue-950 text-white hover:bg-blue-900 focus:outline-none focus:bg-blue-900 rounded-md">
            Next
          </button>
          <button className="px-9 py-2.5 bg-white text-red-600 border border-red-600 hover:bg-red-50 focus:outline-none focus:bg-red-100 rounded-md">
            Cancel
          </button>
        </div>
      </main>
    </div>
  );
};

export default Screen1;
