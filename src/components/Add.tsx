"use client";

import { useState } from "react";

const Add = () => {
  const [qt, SetQt] = useState(1);

  const stock = 4;

  const handleQt = (type: "i" | "d") => {
    if (type === "d" && qt > 1) {
      SetQt((prev) => prev - 1);
    }
    if (type === "i" && qt < stock) {
      SetQt((prev) => prev + 1);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className=" bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32 ">
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQt("d")}
            >
              -
            </button>
            {qt}
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleQt("i")}
            >
              +
            </button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-500">4 items</span> left! <br />{" "}
            {"Don't"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-[#F35C7A] text-[#F35C7A] py-2 px-4 hover:bg-[#F35C7A] hover:text-white disabled:cursor-not-allowed  disabled:bg-pink-200 disabled:text-white disabled:ring-none">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
