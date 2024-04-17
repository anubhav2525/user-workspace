import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { CustomerList } from "./customers/CustomerList";
import { SearchCustomer } from "./customers/SearchCustomer";
import { CustomerForm } from "./customers/CustomerForm";

export const Customer = () => {
  return (
    <div className="min-h-screen min-w-screen overflow-hidden bg-slate-200 dark:bg-slate-800 flex justify-start">
      <div className="sm:w-56 z-20">
        <Sidebar />
      </div>
      <div className="h-screen w-full fixed top-10 sm:relative sm:top-0 z-10">
        <div className="">
          <Header />
        </div>
        <div className="sm:py-4 px-4 py-4 flex flex-col sm:flex-row gap-4 sm:flex-wrap h-screen w-full overflow-y-auto">
          {/* <CustomerList /> */}
          <SearchCustomer/>
          {/* <CustomerForm>Add new customer</CustomerForm> */}
          {/* extra div for bottom margin  */}

          <div className="mt-4 w-full h-4"></div>
        </div>
      </div>
    </div>
  );
};
