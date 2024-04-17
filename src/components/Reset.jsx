import React, { useState, useRef } from "react";
// import { Link } from "react-router-dom";

export const Reset = () => {
  // svg for passwordbox
  const hidePasswordSvg = (
    <svg
      className="w-6 h-6 text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        d="M4.998 7.78C6.729 6.345 9.198 5 12 5c2.802 0 5.27 1.345 7.002 2.78a12.713 12.713 0 0 1 2.096 2.183c.253.344.465.682.618.997.14.286.284.658.284 1.04s-.145.754-.284 1.04a6.6 6.6 0 0 1-.618.997 12.712 12.712 0 0 1-2.096 2.183C17.271 17.655 14.802 19 12 19c-2.802 0-5.27-1.345-7.002-2.78a12.712 12.712 0 0 1-2.096-2.183 6.6 6.6 0 0 1-.618-.997C2.144 12.754 2 12.382 2 12s.145-.754.284-1.04c.153-.315.365-.653.618-.997A12.714 12.714 0 0 1 4.998 7.78ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        clipRule="evenodd"
      />
    </svg>
  );

  const showPasswordSvg = (
    <svg
      className="w-6 h-6 text-gray-400"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z" />
      <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z" />
      <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z" />
    </svg>
  );

  // password show or hide code
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  // reset input code
  const inputRefs = useRef([]);
  const handleInputChange = (index, event) => {
    const currentValue = event.target.value;
    // Move focus to the next input field if available
    if (currentValue !== "" && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <div className="min-h-screen h-full w-screen flex justify-center items-center bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="h-4/5 w-10/12 rounded-xl flex justify-center items-start sm:items-center">
        <div>
          <div className="w-full bg-slate-700 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-300 md:text-2xl">
                Reset password
              </h1>
              <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                <p className="tracking-widest text-gray-400 text-xs md:text-sm">
                  Enter the <span className="font-bold">One Time Password</span>{" "}
                  that you have received from gmail
                </p>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-slate-300"
                  >
                    One Time Password
                  </label>
                  <div className="flex justify-between sm:w-9/12">
                    {[...Array(6)].map((_, index) => (
                      <div key={index}>
                        <label
                          htmlFor={`code-${index + 1}`}
                          className="sr-only"
                        >{`Code ${index + 1}`}</label>
                        <input
                          type="text"
                          maxLength="1"
                          data-focus-input-init
                          id={`code-${index + 1}`}
                          className="bg-gray-700 w-9 h-9 py-3 border font-extrabold text-center text-xs text-gray-200 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block"
                          required
                          placeholder="0"
                          ref={(input) => (inputRefs.current[index] = input)}
                          onChange={(event) => handleInputChange(index, event)}
                        />
                      </div>
                    ))}
                  </div>
                  <p
                    id="errorOTP"
                    className="hidden mt-2 mx-1 text-xs text-red-600"
                  >
                    Lorem, ipsum dolor sit
                  </p>
                </div>
                <div>
                  <div className="relative">
                    <label
                      htmlFor="newPassword"
                      className="block mb-2 text-sm font-medium text-slate-300"
                    >
                      New password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="newPassword"
                      placeholder="••••••••"
                      className="bg-gray-700 text-gray-300 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                      required
                    />
                    <button
                      data-tooltip-target="tooltip-right"
                      data-tooltip-placement="right"
                      className="absolute inset-y-0 right-0 top-7 flex items-center px-3 text-gray-500 hover:text-gray-800 focus:outline-none"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? showPasswordSvg : hidePasswordSvg}
                    </button>
                  </div>
                  <p
                    id="errorNewPassword"
                    className="hidden mt-2 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
                  >
                    Lorem, ipsum dolor sit
                  </p>
                </div>
                <div>
                  <div className="relative">
                    <label
                      htmlFor="confirmPassword"
                      className="block mb-2 text-sm font-medium text-slate-300"
                    >
                      Confirm password
                    </label>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder="••••••••"
                      className="bg-gray-700 text-gray-300 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 pr-10"
                      required=""
                    />
                    <button
                      className="absolute inset-y-0 right-0 top-7 flex items-center px-3 text-gray-500 hover:text-gray-900 focus:outline-none"
                      data-tooltip-target="tooltip-right"
                      data-tooltip-placement="right"
                      onClick={handleTogglePasswordVisibility}
                    >
                      {showPassword ? showPasswordSvg : hidePasswordSvg}
                    </button>
                  </div>
                  <div
                    id="tooltip-right"
                    role="tooltip"
                    class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Tooltip on right
                    <div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <p
                    id="errorConfirmPassword"
                    className="hidden mt-2 mx-1 font-bold text-xs text-red-500 dark:text-red-600"
                  >
                    Lorem, ipsum dolor sit
                  </p>
                </div>
                <button className="text-white w-full bg-blue-600 font-medium rounded-lg text-sm px-3 py-2.5 text-center">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
