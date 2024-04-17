import React from "react";
import { Link } from "react-router-dom";
export const Welcome = () => {
  return (
    <section className="h-screen w-screen bg-gradient-to-r from-slate-500 to-slate-800 dark:bg-slate-800 flex justify-center items-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-cyan-100 to-sky-700 bg-clip-text text-transparent  md:text-5xl lg:text-6xl ">
          Welcome to the Company Admin
        </h1>
        <p className="mb-8 text-lg font-semibold text-gray-300 lg:text-xl sm:px-16 lg:px-48 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          suscipit tempora quos laborum id dolore, dicta vero provident
          doloremque neque!
        </p>
        <Link to="/login">
          <button className="inline-flex mt-3 justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700">
            Login to continue
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};
