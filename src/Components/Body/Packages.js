import React from "react";
import running from "../../images/runner.png";
import weight from "../../images/weight-lifting.png";

export default function Packages(props) {
  return (
    <>
      <div className="name text-white text-3xl text-center p-7  bg-black">
        Packages
      </div>

      <div
        className="container bg-black h-[1200px] flex flex-col justify-start items-center lg:flex-row justify-evenly h-[800px]"
        id="Packages"
      >
        <div className="bg-neutral-900 relative rounded-2xl w-[90%] h-[80%] max-w-md border-4 mb-10 lg:h-[80%] lg:mb-0">
          <h2 className="text-white text-xl absolute left-[23%] top-[12%]">
            Cardio
          </h2>
          <div className="w-[1px] h-[15%] bg-white absolute left-[50%] top-[7%] "></div>
          <h2 className="text-white text-xl absolute left-[55%] top-[12%]">
            Weight Training
          </h2>
          <div className=" text-white absolute left-[48%] top-[22%] text-xl">
            +
          </div>
          <img
            src={running}
            alt=""
            className="w-[20%] absolute left-[18%] top-[27%]"
          />
          <div className="w-[1px] h-[15%] bg-white absolute left-[50%] top-[29%] "></div>
          <img
            src={weight}
            alt=""
            className="w-[20%] absolute left-[62%] top-[27%]"
          />
          <p className="text-white text-md absolute left-[29%] top-[55%]">
            Montly subscription
          </p>
          <div className="bg-white rounded-xl w-[25%] h-[12%] absolute left-[35%] top-[64%] lg:h-[8%] left-[34%]"></div>
          <p className="text-black text-[150%] text-center absolute left-[37%] top-[65%]">
            $ 54.99
          </p>
          <button
            className="bg-red-400 rounded-xl w-[40%] h-[10%] absolute left-[28%] top-[80%]"
            onClick={props.onShowForm}
          >
            Register
          </button>
        </div>

        <div className="bg-neutral-900 relative rounded-2xl w-[90%] h-[80%] max-w-md border-4 lg:h-[80%]">
          <h2 className="text-white text-xl absolute left-[30%] top-[12%]">
            Weight Training
          </h2>
          <img
            src={weight}
            alt=""
            className="w-[30%] absolute left-[34%] top-[20%]"
          />
          <p className="text-white text-md absolute left-[30%] top-[55%]">
            Montly subscription
          </p>
          <div className="bg-white rounded-xl w-[25%] h-[12%] absolute left-[35%] top-[64%] lg:h-[8%] left-[34%]"></div>
          <p className="text-black text-[150%] text-center absolute left-[37%] top-[65%]">
            $ 29.99
          </p>
          <button
            className="bg-red-400 rounded-xl w-[40%] h-[10%] absolute left-[28%] top-[80%]"
            onClick={props.onShowForm}
          >
            Register
          </button>
        </div>
      </div>

      <div className="hr-container flex flex-col justify-center items-center h-44 bg-black">
        <hr className="w-[80%] text-white mb-16" />
      </div>
    </>
  );
}
