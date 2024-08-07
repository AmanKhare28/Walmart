import React, { useRef } from 'react'
import '../index.css';
import { IoCloseCircle } from "react-icons/io5";
function Navbar() {
  const ref = useRef();

  const toggle = ()=>{
    if (ref.current.classList.contains('block')) {
      ref.current.classList.remove('block')
      ref.current.classList.add('hidden')
    }
    else if (!ref.current.classList.contains('block')) {
      ref.current.classList.remove('hidden')
      ref.current.classList.add('block')
    }
  }
  return (
    <>
<nav className="bg-white">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="logo192.png" className="h-8" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap ">Walmart</span>
    </a>
    <button onClick={toggle} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
        
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
        
        <li>
          <a href="/dashboard" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-black md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent mt-1 ">Dashboard</a>

        </li>
        <li>
        <button  className=" inline-flex text-white items-center bg-cyan-500 border-0 py-1 px-3 focus:outline-none hover:bg-fuchsia-500 transition-all duration-700 rounded text-base mt-4 md:mt-0"> <a href='/login' >Login</a> 
        
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
        </li>
      </ul>
    </div>
    </div>
    </nav>

    <div ref={ref} className="absolute bg-pink-200 w-40 top-2 right-0 transition hidden " id="navbar-default">
    <span className='absolute top-1 right-2 cursor-pointer text-xl text-pink-500' onClick={toggle} ><IoCloseCircle /></span>
      <ul className="font-medium p-2 rounded-lg">
        <li>
          <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</a>
        </li>
        <li><button  className="inline-flex text-white items-center bg-dr border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0"> <a href='/login' >Login</a> 
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button></li>
      </ul>
    </div>
  </>
  )
}

export default Navbar