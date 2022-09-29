import React from "react";
import Modal from "../UI/Modal";

export default function Form(props) {
  return (
    <Modal>
      <form action="">
        <button
          className="rounded-tr-lg rounded-bl-lg w-[10%] h-[5%] text-white bg-red-500 fixed left-[85%]"
          onClick={props.onHideForm}
        >
          X
        </button>
        <div
          className="container bg-white
         rounded-2xl w-[90%] h-[700px] ml-[5%] max-w-2xl flex flex-col justify-start items-start"
        >
          <label className="mt-5 ml-5">First name</label>
          <input
            type="text"
            className="w-[90%] h-10 ml-[4%] rounded-xl  bg-slate-200 p-4"
          />
          <label className="mt-5 ml-5">Last name</label>
          <input
            type="text"
            className="w-[90%] h-10 ml-[4%] rounded-xl  bg-slate-200 p-4"
          />
          <label className="mt-5 ml-5">Contact No</label>
          <input
            type="text"
            className="w-[90%] h-10 ml-[4%] rounded-xl bg-slate-200 p-4"
          />
          <label className="mt-5 ml-5">Email</label>
          <input
            type="text"
            className="w-[90%] h-10 ml-[4%] rounded-xl bg-slate-200 p-4"
          />
          <div className="relative mt-10">
            <label className="mt-5  absolute left-5 bottom-[1px]">Age</label>
            <label className="mt-5 absolute left-52 bottom-[1px]">Height</label>
          </div>
          <div className="flex">
            <input
              type="text"
              className="w-[50%] h-10 ml-[4%] rounded-xl bg-slate-200 p-4"
            />
            <input
              type="text"
              className="w-[50%] h-10 ml-[4%] rounded-xl bg-slate-200 mr-5 p-4"
            />
          </div>

          <label className="mt-5 ml-5">Subscription</label>
          <input
            type="text"
            className="w-[90%] h-10 ml-[4%] rounded-xl bg-slate-200 p-4"
          />

          <label className="mt-5 ml-5 mr-5">Subscription Fee</label>

          <input
            type="text"
            className="w-[40%] h-10 ml-[4%] rounded-xl bg-slate-200 p-4"
          />

          <label className="mt-5 ml-5 text-sm  text-red-500 fixed top-[505px] left-[43%]">
            Note:
          </label>
          <label className="mt-5 ml-5 text-sm  text-red-500 fixed top-[525px] left-[43%]">
            Pay fee to the Admin at
          </label>
          <label className="mt-5 ml-5 text-sm  text-red-500 fixed top-[545px] left-[43%]">
            gym counter.
          </label>

          <button className="w-[35%] h-12 bg-blue-300 rounded-2xl mt-10 ml-[30%]">
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
}
