import React from "react";
import { CustomerTable } from "./CustomerTable";
import { CustomerNav } from "./CustomerNav";
export const CustomerList = () => {
  return (
    <div className=" w-full ">
      <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div className="text-slate-800 dark:text-white px-4 py-2 text-xl sm:text-2xl md:text-3xl font-bold">
          Latest customer
        </div>
        <CustomerNav />
        <CustomerTable />
      </div>
    </div>
  );
};
