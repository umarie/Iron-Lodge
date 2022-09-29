import React from "react";
import register from "../../images/edit.png";
import timing from "../../images/time.png";
import phone from "../../images/phone.png";
import { Link } from "react-scroll";

export default function Navigator() {
  return (
    <>
      <div className="container  fixed top-60 rounded-r-3xl z-10 bg-my-color w-16 h-80">
        <div className="relative">
          <Link
            to="Packages"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img
              className="w-10 h-10 absolute top-10 left-3 animate-pulse"
              src={register}
              alt=""
            />
          </Link>
          <hr className="w-12 bg-white absolute top-28" />
          <Link
            to="Timing"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img
              className="w-10 h-10 absolute top-36 left-3"
              src={timing}
              alt=""
            />
          </Link>
          <hr className="w-12 bg-white absolute top-52" />
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img
              className="w-10 h-10 absolute top-60 left-3 "
              src={phone}
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
