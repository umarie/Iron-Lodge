import React from "react";
import insta from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import twitter from "../../images/twitter-sign.png";
import phone from "../../images/phone-call.png";
import email from "../../images/email.png";

export default function Footer() {
  return (
    <>
      <div
        className="container bg-my-color h-80 flex flex-col justify-start items-center"
        id="footer"
      >
        <p className="text-black text-sm mt-7 mb-3">Follow us on</p>

        <div className="container2 flex justify-start items-center mt-4">
          <img className="w-8 h-8" src={insta} alt="" />
          <img className="w-8 h-8 ml-5" src={facebook} alt="" />
          <img className="w-8 h-8 ml-5" src={twitter} alt="" />
        </div>

        <div className="container2 flex justify-start items-center mt-10">
          <p className="text-black text-sm mr-4 font-bold">
            Terms & conditions
          </p>
          <p className="text-black text-sm font-bold ml-4">Privacy policy</p>
        </div>

        <div className="container2 flex justify-start items-center mt-5">
          <img className="w-5 h-5 ml-8 mr-2" src={phone} alt="" />
          <p className="text-black text-sm mt-5 mb-5 font-bold">9985400</p>
          <img className="w-5 h-5 ml-8 mr-2" src={email} alt="" />
          <p className="text-black text-sm   mt-5 mb-5 font-bold">
            ironlodge@gmail.com
          </p>
        </div>
        <p className="text-black text-center text-sm mt-3 mb-5 mr-5 font-bold">
          441 4th street ,NW | DC USA
        </p>
        <p className="text-black text-[10px] text-center">
          All rights reserved @2022
        </p>
      </div>
    </>
  );
}
