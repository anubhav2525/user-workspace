import React from "react";
import { Link } from "react-router-dom";
export const Signin = () => {
  return (
    <div className="min-h-screen h-full w-screen flex justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="h-4/5 w-10/12 rounded-xl flex justify-center items-start sm:items-center text-slate-100">
        <div>
          <div className="w-full bg-slate-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-300 md:text-2xl">
                Sign in to your account
              </h1>
              <p className="tracking-widest text-xs sm:text-sm  text-gray-400">
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <div className="relative">
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-slate-300"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="abc123@gmail.com"
                      className="bg-gray-700 text-gray-300 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                      required
                    />
                  </div>
                  <p
                    id="errorUsername"
                    className="hidden mt-2 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
                  >
                    Lorem, ipsum dolor sit
                  </p>
                </div>
                <div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-slate-300"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-700 text-gray-300 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                      required=""
                    />
                  </div>
                  <p
                    id="errorPassword"
                    className="hidden mt-2 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
                  >
                    Lorem, ipsum dolor sit
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 rounded bg-gray-500"
                        required=""
                      />
                    </div>
                    <div className="ml-1 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember
                      </label>
                    </div>
                  </div>
                  <Link
                    to="/forget"
                    className="text-sm font-medium text-primary-600 hover:underline "
                  >
                    Forgot password?
                  </Link>
                </div>
                <Link>
                  <button className="w-full mt-4 text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Sign in
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
