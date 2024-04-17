import React, { useState, useEffect, useRef } from "react";
import { SidebarLink } from "./SidebarLink";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // create the active
  // let [activeState, setActiveState] = useState(0);
  let [activeState, setActiveState] = useState(true);
  const ChangeActiveState = (index) => {
    setActiveState(index);
  };
  return (
    <>
      <button
        onClick={toggleSidebar}
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        type="button"
        className="inline-flex items-center p- my-2 ms-3 text-sm text-gray-900 rounded-lg sm:hidden dark:text-gray-100 dark:hover:bg-gray-700 "
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        ref={sidebarRef}
        id="logo-sidebar"
        className={`h-full z-10 bg-slate-800 w-full  transition-transform ${
          isOpen ? "" : "-translate-x-full sm:-translate-x-0"
        }`}
        aria-label="Sidebar"
      >
        <div className="h-full w-full rounded-lg bg-slate-900 border-slate-600 dark:border-gray-500 px-3 py-4 overflow-y-auto ">
          <Link to="/admin">
            <div className="flex items-center ps-2.5 mb-5">
              <img
                src={"https://flowbite.com/docs/images/logo.svg"}
                className="h-6 me-3 sm:h-7"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Company
              </span>
            </div>
          </Link>
          <ul className="space-y-2 font-medium">
            {SidebarLink.map((item, index) => {
              return (
                <Link
                  to={item.link}
                  key={index}
                  // onClick={() => ChangeActiveState(index)}
                >
                  <li
                    className={`flex items-center p-2 my-2 rounded-lg hover:bg-blue-700 ${
                      activeState === index ? "bg-blue-700" : " text-slate-100"
                    } hover:text-slate-100 text-slate-200 dark:text-white dark:hover:bg-blue-700 group`}
                  >
                    <span>{item.svg}</span>
                    <span className="ms-3">{item.linkname}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};
