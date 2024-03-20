import { useMemo } from "react";


const FrameComponent = ({
  report,
  reports,
  propWidth,
  propBackgroundColor,
  propBackgroundColor1,
  propMinWidth,
  onClick
}) => {
  
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const reportsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="h-[246px] w-[494px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full text-left text-3xl text-black font-poppins"
      style={frameDivStyle}
    >
      <div
        className="self-stretch flex-1 rounded-xl bg-blue-200 flex flex-col items-start justify-start pt-[41px] px-[181px] pb-[45px] box-border gap-[19px] max-w-full z-[1] mq900:pl-[90px] mq900:pr-[90px] mq900:box-border"
        style={groupDivStyle}
      >
        <div
          className="w-[494px] h-[245px] relative rounded-xl bg-lightsteelblue hidden max-w-full"
          style={rectangleDivStyle}
        />
        <img
          className="w-[107px] h-[107px] relative object-cover z-[1] cursor-pointer"
          loading="lazy"
          alt=""
          src={report}
          onClick={onClick}
        />
        <div className="flex flex-row items-start justify-start py-0 px-[13px]">
          <div
            className="relative font-medium inline-block min-w-[85px] z-[1] mq450:text-lg"
            style={reportsStyle}
          >
            {reports}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
