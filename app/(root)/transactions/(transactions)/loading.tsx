import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { useRouter } from 'next/router';

const loading = () => {
  const tableHeaders = new Array(6).fill(null);
  const rows = new Array(5).fill(null);
  const cards = new Array(4).fill(null);
  

  return (
    <div className="page__wrapper max-w-full mt-10">
      <div className="mt-11 flex w-full gap-5 flex-wrap pb-5">
        {cards.map((_, index) => (
          <div
            key={index}
            className={`bg-white dark:bg-[#1E293B] w-full sm:w-[31.8%] lg:w-[23.7%] flex items-center px-4 
         h-[90px] rounded border border-[#E5E7EB] dark:border-[#334155] mb-2 sm:mb-4 lg:mb-0`}
          >
            <Skeleton className="px-3 py-2.5 rounded mr-4 h-[50px] w-[50px]" />
            <div className="flex flex-col justify-center h-full">
              <Skeleton />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 overflow-hidden overflow-x-scroll sm:overflow-auto">
        <table className="w-full border-collapse">
          {/* Table Header Skeleton */}
          <thead>
            <tr className="dark:bg-[#334155] bg-[#E2E8F0]">
              {tableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="border-x dark:border-[#6B7280] border-[#DADFE6] px-3 py-3 text-start"
                >
                  <Skeleton className="h-5 w-20 bg-[#E2E8F0] dark:bg-[#6B7280]" />
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body Skeleton */}
          <tbody className="dark:bg-[#1E293B] bg-white">
            {rows.map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className="border dark:border-[#374151] border-[#E5E7EB]"
              >
                {tableHeaders.map((_, colIndex) => (
                  <td
                    key={colIndex}
                    className="px-3 py-3 transaction__table-border"
                  >
                    <Skeleton className="h-4 w-full bg-[#E2E8F0] dark:bg-[#6B7280]" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default loading;
