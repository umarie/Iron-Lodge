import React from "react";
import dumbell from "../../images/dumbell.png";

export default function Header() {
  return (
    <>
      <div className="container fixed flex justify-center z-50 items-center h-16 bg-my-color">
        <div className="inner-circle w-10 h-10 rounded-3xl bg-white relative ">
          <img
            className="w-6 h-6 absolute top-2 left-2 animate-spin"
            src={dumbell}
            alt="gym-logo"
          />
        </div>
      </div>
    </>
  );
}
