import React, { useState, useEffect } from "react";

function Submain({ contactref }) {
  const handlecontact = () => {
    contactref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after the component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="w-full flex justify-center mt-20">
        <div className="w-3/4">
          <h1
            className={`text-8xl font-bold font-poppins text-center text-slate-800 leading-tight transition-opacity duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            AI Powered Inventory Management For Sellers.
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center mt-10">
        <h1
          className={`text-3xl font-poppins text-center text-slate-400 leading-snug w-1/2 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Streamline Operations, Optimize Stock Levels, and Gain
          <br /> Real-Time Insights for Unmatched Efficiency and Accuracy.
        </h1>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-evenly mt-24 w-2/5">
          <a
            href="/Dashboard"
            className="relative inline-flex items-center justify-center p-4 px-12 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-cyan-500 rounded-full shadow-md group bg-cyan-500"
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-cyan-500 duration-300 -translate-x-full bg-white group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
              Dashboard
            </span>
            <span className="relative invisible">Dashboard</span>
          </a>

          <button
            className="relative inline-flex items-center justify-center p-4 px-12 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-cyan-500 rounded-full shadow-md group"
            onClick={handlecontact}
          >
            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-500 group-hover:translate-x-0 ease">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="absolute flex items-center justify-center w-full h-full text-cyan-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Contact Us
            </span>
            <span className="relative invisible">Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Submain;
