import React from "react";
import Typical from "react-typical";

export default function Timing() {
  return (
    <>
      <div
        className="name text-white text-3xl text-center  bg-black"
        id="Timing"
      >
        Timing
      </div>

      <div className="flex flex-col justify-center items-center h-[500px] bg-black">
        <div className="bg-neutral-900 rounded-xl w-[80%] h-[50%] max-w-lg">
          <h3 className="text-white text-xl ml-[40%] mt-10">
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={["Monday", 1000, "To", 1000, "Saturday", 1000]}
            ></Typical>
          </h3>
          <hr className="bg-white w-[80%] ml-[10%] mt-10" />
          <h3 className="text-white text-xl mt-10 ml-[35%] ">5AM - 11PM </h3>
        </div>
      </div>

      <div className="note-container flex flex-col justify-start items-center h-[200px] bg-black">
        <h3 className="text-white text-lg text-center p-2">Note:</h3>
        <p className="text-red-500 text-sm">
          *Timings should be strictly followed
        </p>
        <p className="text-red-500 text-sm">
          *Any changes in this time table will be notified
        </p>
      </div>

      <div className="hr-container flex flex-col justify-center items-center h-1 bg-black">
        <hr className="w-[80%] text-white mb-16" />
      </div>
    </>
  );
}
