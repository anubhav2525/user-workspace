import React from "react";
import UserImage from "../../assests/img/userimg.jpg";
export const User = () => {
  return (
    <div className="w-full max-w-sm min-h-80 max-h-96 bg-white border border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-600">
      <div className="flex justify-end px-4 pt-3">
        <button
          id="dropdownButton"
          data-dropdown-toggle="dropdown"
          className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
        >
          <svg
            className="w-6 h-6 text-gray-400 dark:text-gray-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M12 6h.01M12 12h.01M12 18h.01"
            />
          </svg>
        </button>

        {/* Dropdown menu */}
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Edit
            </li>
            <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
              Show profile
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-5">
        <img
          className="w-28 h-28 mb-3 rounded-full shadow-lg border dark:border-slate-700  shadow-stone-400/25"
          src={UserImage}
          alt="user"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Name
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Designation
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          ID : 12311231dfs
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          mail id : Lorem, ipsum dolor.
        </span>
      </div>
    </div>
  );
};
