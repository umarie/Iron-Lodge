import React from "react";
import bg from "../../images/gym bg.png";
import Typical from "react-typical";

export default function Home() {
  return (
    <>
      <div className="lg:flex pt-12">
        <div
          className="first-container flex flex-col justify-center items-center bg-black
        lg:pl-16 h-auto"
        >
          <h1 className="text-white text-2xl mt-20 mb-5 font-sans lg:text-3xl xl:text-5xl">
            WELCOME TO{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={["HEALTH CLUB 💪", 2000, " IRON LODGE!", 2000]}
            ></Typical>
          </h1>
          <h2 className="text-white text-sm text-center mb-10 font-sans md:px-10 lg:text-md xl:text-lg">
            Every New Year, fitness clubs see a HUGE increase in enrollment.
            Motivated by the desire to get fit or lose weight, thousands of
            people flock to gyms. What are you waiting for?
          </h2>
          <h2 className="text-red-400 text-xl md:text-2xl xl:text-3xl">
            BE STRONG, TRAIN HARD
          </h2>
        </div>

        <div
          className="second-container flex flex-col justify-start items-end bg-black md:h-auto
        lg:h-auto"
        >
          <img
            className="w-72 mt-10 md:w-[350px] lg:w-auto mr-5 pt-20"
            src={bg}
            alt=""
          />
        </div>
      </div>

      <div className="hr-container flex flex-col justify-center items-center  bg-black">
        <hr className="w-[80%] text-white mb-16 lg:mt-20" />
      </div>
    </>
  );
}
