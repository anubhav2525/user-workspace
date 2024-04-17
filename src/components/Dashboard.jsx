import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { User } from "./dashboard/User";
import { CustomerCard } from "./dashboard/CustomerCard";
export const Dashboard = () => {
  return (
    <div className="min-h-screen min-w-screen overflow-hidden bg-slate-200 dark:bg-slate-800 flex justify-start">
      <div className="sm:w-56 z-20">
        <Sidebar />
      </div>
      <div className="h-screen w-full fixed top-10 sm:relative sm:top-0 z-10">
        <div className="">
          <Header />
        </div>
        <div className="sm:py-4 px-4 pt-4 pb-8  flex flex-col sm:flex-row gap-4 sm:flex-wrap h-screen overflow-y-auto">
          <User />
          <CustomerCard />
          
          
        
          <div className="mt-4 w-full h-4"></div>
        </div>
      </div>
    </div>
    // </div>
  );
};
