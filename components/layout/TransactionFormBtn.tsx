"use client"
import React from "react";
import { useFormStatus } from "react-dom";

type TransactionFormBtn = {
  formType: string;
};

const TransactionFormBtn = ({ formType }: TransactionFormBtn) => {
  const { pending } = useFormStatus();
  return (
    <div className="w-full flex justify-end mt-10">
      <button
        className={`${
          pending ? "bg-slate-500" : "bg-[#EF4444]"
        }  me-2 py-2 px-4 text-white`}
        aria-disabled={pending}
      >
        Cancel
      </button>
      <button
        className={`${
          pending ? "bg-slate-500" : "bg-[#22C55E]"
        } px-4 text-white`}
        type="submit"
        aria-disabled={pending}
      >
        {formType === "CREATE" ? "CREATE" : "UPDATE"}
      </button>
    </div>
  );
};

export default TransactionFormBtn;
