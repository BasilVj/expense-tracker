import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const loading = () => {
  const formLabels = new Array(4).fill(null);
  return (
    <div className="page__wrapper ">
      <Skeleton className="bg-[#ffffff] dark:bg-[#334155] w-[200px] h-[25px] mb-2" />
      <div className="pt-8 w-full lg:w-[500px]">
        <form>
          {formLabels.map((_, index) => (
            <label className="flex flex-col mb-4" key={index}>
              <Skeleton className="bg-[#ffffff] dark:bg-[#334155] w-[120px] h-[20px] mb-2" />
              <Skeleton className="bg-[#ffffff] dark:bg-[#334155] px-3 py-1 mt-1 h-[43px] border border-[#6b7280]" />
            </label>
          ))}
        </form>
        <label className="flex flex-col mb-4">
          <Skeleton className="bg-[#ffffff] dark:bg-[#334155] w-[120px] h-[20px] mb-2" />
          <Skeleton className="bg-[#ffffff] dark:bg-[#334155] w-[100px] px-3 py-1 mt-1 h-[43px] border border-[#6b7280]" />
        </label>
        <div className="w-full flex justify-end mt-10">
          <Skeleton className="bg-[#ffffff] dark:bg-[#334155] me-2 w-[80px] h-[40px]" />
          <Skeleton className="bg-[#ffffff] dark:bg-[#334155] me-2 w-[80px] h-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default loading;
