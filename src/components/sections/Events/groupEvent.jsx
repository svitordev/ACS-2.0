"use client";
import React, { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export const Events = ({children, title}) => {
  const [info, setInfo] = useState(false);
  const openInfo = () => setInfo(true);
  const closeInfo = () => setInfo(false);
  return (
    <div className="flex flex-col self-start space-y-6 w-full">
      <button onClick={info === false ? openInfo : closeInfo}>
        <h2 className="text-xl xl:text-2xl text-start text-blue-950 font-bold font-serif leading-none flex gap-1 items-center">
          {title} {info === false ? <MdArrowDropDown/> : <MdArrowDropUp/>}
        </h2>
      </button>
      {info === true && (<>{children}</>) }
    </div>
  );
};
