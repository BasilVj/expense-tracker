"use client";
import React from "react";
import Icon from "../common/Icon";
import { BsFunnel, BsPlusLg } from "react-icons/bs";
import Link from "next/link";
import { useOffCanvasContext } from "@/hooks/useOffCanvasContext";

const TransactionTableActionBtns = () => {
  const { toggleOffcanvas, setToggleOffcanvas } = useOffCanvasContext();
  return (
    <div className="flex gap-1 sm:gap-2">
      <Link href={"/transactions/create"}>
        <Icon
          iconName={BsPlusLg}
          iconCls=""
          iconcontainerCls="bg-[#21c45e] p-[0.75rem] rounded-sm cursor-pointer"
        />
      </Link>
      <div onClick={() => setToggleOffcanvas(true)}>
        <Icon
          iconName={BsFunnel}
          iconCls="text-black"
          iconcontainerCls="bg-[#facc15] p-[0.75rem] rounded-sm cursor-pointer"
        />
      </div>
    </div>
  );
};

export default TransactionTableActionBtns;
