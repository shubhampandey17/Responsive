import FrameComponent1 from "../components/frame-component1";
import WelcomeBox from "../components/welcome-box";
import FrameComponent from "../components/frame-component";

const Screen1 = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <main className="w-[1903px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[46px] max-w-full mq1300:pl-5 mq1300:box-border mq900:gap-[46px_23px]">
        <FrameComponent1 />
        <section className="flex-1 flex flex-col items-start justify-start pt-[45px] px-0 pb-0 box-border max-w-[calc(100%_-_141px)] text-left text-base text-brown font-poppins mq1300:pt-[29px] mq1300:box-border mq1300:max-w-full mq900:pt-5 mq900:box-border">
          <div className="self-stretch flex flex-col items-start justify-start pt-[70.09999999999991px] px-[45px] pb-[111px] box-border relative gap-[69px] max-w-full mq1300:pt-[46px] mq1300:px-[22px] mq1300:pb-[72px] mq1300:box-border mq450:gap-[17px_69px] mq900:gap-[34px_69px] mq900:pt-[30px] mq900:pb-[47px] mq900:box-border">
            <WelcomeBox />
            <div className="w-[1548.8px] flex flex-row items-start justify-center max-w-full">
              <div className="h-[220.9px] w-[206px] relative">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[48.6px] w-[121px] h-[109px]">
                  <img
                    className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-[50%] max-h-full w-[109px] object-cover z-[1]"
                    alt=""
                    src="/gt@2x.png"
                  />
                  <div className="absolute top-[20.9px] left-[98px] rounded-[50%] bg-yellowgreen box-border w-[23px] h-[23px] z-[2] border-[0px] border-solid border-white" />
                </button>
                <div className="absolute top-[104.9px] left-[41.6px] flex flex-col items-start justify-start">
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[22px]">
                    <div className="flex flex-row items-start justify-start gap-[21px]">
                      <div className="relative tracking-[0.02em] leading-[64px] inline-block min-w-[79px] z-[2]">
                        Welcome
                      </div>
                      <div className="h-[36.6px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border">
                        <img
                          className="w-[23.2px] h-[20.6px] relative z-[1]"
                          loading="lazy"
                          alt=""
                          src="/icon-awesomeedit.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative leading-[18px] font-semibold text-darkslateblue-200 inline-block min-w-[124px] z-[3] mt-[-19px]">
                    Dr. Dandamudi
                  </div>
                </div>
                <div className="absolute top-[177.9px] left-[0px] w-full flex flex-col items-end justify-start text-center text-sm text-darkslateblue-200">
                  <div className="self-stretch h-9 relative tracking-[0.02em] leading-[18px] font-light inline-block z-[1]">
                    <p className="m-0">Pre- Production Release Test</p>
                  </div>
                  <div className="flex flex-row items-start justify-end py-0 pr-[32.400000000001455px] pl-9 mt-[-11px] text-left text-[11px]">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <div className="h-3.5 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                        <img
                          className="w-[7px] h-2.5 relative z-[2]"
                          loading="lazy"
                          alt=""
                          src="/icon-materiallocationon.svg"
                        />
                      </div>
                      <div className="relative tracking-[0.02em] leading-[18px] inline-block min-w-[123px] z-[2]">
                        Battle Creek PC (CST)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[64px] max-w-full text-3xl text-black mq450:gap-[16px_64px] mq900:gap-[32px_64px]">
              <div className="flex flex-row items-end justify-center gap-[61px] max-w-full mq450:gap-[61px_15px] mq900:gap-[61px_30px] mq1650:flex-wrap">
                <div className="w-[494px] rounded-xl bg-navajowhite flex flex-col items-start justify-start pt-[43px] px-[179px] pb-[45px] box-border gap-[19px] max-w-full z-[1] mq450:pl-[89px] mq450:pr-[89px] mq450:box-border">
                  <div className="w-[494px] h-[245px] relative rounded-xl bg-navajowhite hidden max-w-full" />
                  <div className="w-[105px] flex flex-row items-start justify-start">
                    <div className="h-[105px] flex-1 relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full z-[2]" />
                      <img
                        className="absolute top-[23px] left-[25px] w-[60px] h-[59px] object-cover z-[3]"
                        loading="lazy"
                        alt=""
                        src="/chat-1@2x.png"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[19px]">
                    <div className="relative font-medium inline-block min-w-[67px] z-[2] mq450:text-lg">
                      Chats
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-end pt-0 pb-px pr-3 pl-0 box-border max-w-full">
                  <div className="rounded-xl bg-pink flex flex-col items-start justify-start pt-[38px] pb-[42px] pr-[140px] pl-[152px] box-border gap-[27px] max-w-full z-[1] mq900:pl-[76px] mq900:pr-[70px] mq900:box-border">
                    <div className="w-[494px] h-[245px] relative rounded-xl bg-pink hidden max-w-full" />
                    <div className="w-[191px] flex flex-row items-start justify-start py-0 px-[43px] box-border">
                      <div className="flex-1 flex flex-row items-start justify-start z-[2]">
                        <div className="h-[105px] flex-1 relative">
                          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
                          <img
                            className="absolute top-[18px] left-[18px] w-[70px] h-[69px] object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src="/socialmediamarketing@2x.png"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="relative font-medium z-[2] mq450:text-lg">
                      Create Campaign
                    </div>
                  </div>
                </div>
                <div className="w-[494px] rounded-xl bg-silver-200 flex flex-col items-center justify-start pt-[30px] pb-[50px] pr-5 pl-[21px] box-border gap-[27px] max-w-full z-[1]">
                  <div className="w-[494px] h-[245px] relative rounded-xl bg-silver-200 hidden max-w-full" />
                  <div className="w-[285px] flex flex-row items-start justify-center">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[105px] flex flex-row items-start justify-start z-[2]">
                      <div className="h-[105px] flex-1 relative">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
                        <img
                          className="absolute top-[21px] left-[22px] w-[62px] h-[63px] object-cover z-[1]"
                          alt=""
                          src="/onboarding@2x.png"
                        />
                      </div>
                    </button>
                  </div>
                  <div className="relative font-medium z-[2] mq450:text-lg">
                    Appointment Automation
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-center gap-[60px] max-w-full mq900:gap-[60px_30px] mq1650:flex-wrap">
                <FrameComponent report="/report@2x.png" reports="Reports" />
                <FrameComponent
                  report="/googleforms@2x.png"
                  reports="Forms"
                  propWidth="508px"
                  propBackgroundColor="#c6c6c5"
                  propBackgroundColor1="#c6c6c5"
                  propMinWidth="69px"
                />
                <div className="w-[494px] rounded-xl bg-lightgray flex flex-col items-center justify-start pt-12 pb-[41px] pr-5 pl-[26px] box-border gap-[18px] max-w-full z-[1]">
                  <div className="w-[494px] h-[245px] relative rounded-xl bg-lightgray hidden max-w-full" />
                  <div className="w-[132px] flex flex-row items-start justify-start py-0 pr-[17px] pl-2.5 box-border">
                    <div className="flex-1 flex flex-row items-start justify-start z-[1]">
                      <div className="h-[105px] flex-1 relative">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
                        <img
                          className="absolute top-[11px] left-[17px] w-[72px] h-[72px] object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/users@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="relative font-medium z-[1] mq450:text-lg">{`Automation `}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <img
        className="w-[9px] h-[14.4px] relative hidden z-[3]"
        alt=""
        src="/path-12187.svg"
      />
      <footer className="self-stretch bg-brown flex flex-row items-start justify-center pt-[26px] px-5 pb-[23px] box-border max-w-full text-left text-sm text-white font-poppins">
        <div className="h-[70px] w-[1920px] relative bg-brown hidden max-w-full" />
        <div className="relative z-[1]">
          © 2023, ModuleMD®. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Screen1;
