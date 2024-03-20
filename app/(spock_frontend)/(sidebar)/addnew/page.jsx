const page = () => {
  return (
    <div className="font-poppins">
      <header>
        <div className="absolute top-[15px] left-[83px] rounded-4xs bg-lavender w-[1245px] h-[70px]" />
        <div className="absolute top-[33px] left-[620px] text-2xl leading-[33px] font-semibold">
          Create Message
        </div>
        <div className="absolute top-[33px] left-[120px] text-2xl leading-[33px] font-medium text-dodgerblue cursor-pointer">
          {" "}
          {"<"}
          {"\u00A0"} Back{" "}
        </div>
        <div className="absolute top-[33px] right-[65px] text-2xl leading-[33px] font-medium text-dodgerblue cursor-pointer">
          {" "}
          Cancel{" "}
        </div>
      </header>

      <main className="relative top-[105px] left-[60px] w-[1190px]">
        <div className="flex items-center">
          <label htmlFor="to" className="mr-4">
            To:
          </label>
          <input
            type="text"
            id="to"
            className="border border-gray-300 px-4 py-3.5 focus:outline-none focus:border-blue-500 rounded-md shadow-md opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
            style={{ width: "calc(100% - 60px)" }}
          />
        </div>

        <div className="absolute top-[10px] left-[1155px] cursor-pointer">
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#1E90FF"
              strokeWidth="2"
              fill="transparent"
            />
            <path
              d="M13 7.5h-2V11H7.5v2H11v3.5h2V13h3.5v-2H13z"
              stroke="#1E90FF"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>

        <form class="grid grid-cols-1 gap-y-10  w-96">
          <div class="grid grid-cols-2 gap-x-16">
            <label for="sender-phone" class="py-4">
              Sender Phone
            </label>
            <label for="send-to" class="py-4">
              Send To
            </label>

            <input
              type="number"
              id="sender-phone"
              class="border border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-500 rounded-md w-full"
              placeholder="97338244563"
            />
            <input
              type="number"
              id="send-to"
              class="border border-gray-300 px-4 py-3 focus:outline-none focus:border-blue-500 rounded-md w-full"
              placeholder="Mobile Phone"
            />
          </div>

          <div>
            <textarea
              id="description"
              rows="8"
              cols="140"
              className="border border-gray-300 px-5 py-5 focus:outline-none focus:border-blue-500 rounded-sm text-sm"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. molestie eros. Nulla non rutrum elit. Fusce sodales massa quis fermentum commodo. "
            ></textarea>
          </div>

          <p className="absolute top-[360px] right-[35px] text-xs">
            You can enter up to 1000 characters
          </p>

          <div className="relative bottom-[85px] left-[1130px] cursor-pointer">
            <svg
              className="w-8 h-8"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" fill="#00c04b" />
              <path
                d="M12 17v-10M7 12l5-5 5 5"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </form>

        <div className="absolute bottom-1 cursor-pointer">
          <svg
            class="w-16 h-16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" fill="#E6E6FA" />
            <circle
              cx="12"
              cy="12"
              r="6"
              stroke="#000000"
              stroke-width="1"
              fill="transparent"
            />
            <path d="M10 12h4M12 10v4" stroke="#000000" stroke-width="1" />
          </svg>
        </div>
      </main>
    </div>
  );
};

export default page;