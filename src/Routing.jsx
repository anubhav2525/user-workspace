import { Welcome } from "./components/Welcome";
import { Signin } from "./components/Signin";
import { createBrowserRouter } from "react-router-dom";
import { Forget } from "./components/Forget";
import { Reset } from "./components/Reset";
import { Error404 } from "./components/Error404";
import { Dashboard } from "./components/Dashboard";
import { Customer } from "./components/Customer";
import { Leads } from "./components/Leads";

export const Routing = createBrowserRouter([
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Signin /> },
  { path: "/forget", element: <Forget /> },
  { path: "/reset", element: <Reset /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/customer", element: <Customer /> },
  { path: "/leads", element: <Leads /> },
  { path: "*", element: <Error404 /> },
]);
