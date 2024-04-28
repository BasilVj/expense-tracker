"use client";
import React, { useState } from "react";
import { BsXLg } from "react-icons/bs";
import Icon from "../common/Icon";
import { useOffCanvasContext } from "@/hooks/useOffCanvasContext";

const OffCanavsFilter = () => {
  const { toggleOffcanvas, setToggleOffcanvas } = useOffCanvasContext();

  return (
    <div
      className={`${
        toggleOffcanvas ? "translate-x-0" : "translate-x-full"
      } z-10 fixed top-0 min-h-screen w-full offCanvas__width lg:w-[29%] xl:w-[23.5%] 2xl:w-[22%] bg-black right-0 transition-all duration-300`}
    >
      <h1>OffCanavsFilter</h1>
      <div onClick={() => setToggleOffcanvas((prev) => !prev)}>
        <Icon iconName={BsXLg} iconCls="" iconcontainerCls="cursor-pointer" />
      </div>
    </div>
  );
};

export default OffCanavsFilter;
