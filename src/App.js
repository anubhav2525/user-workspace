import React from "react";
import { RouterProvider } from "react-router-dom";
import { Routing } from "./Routing";

export const App = () => {
  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <RouterProvider router={Routing} />
    </div>
  );
};
