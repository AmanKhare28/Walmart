import React from 'react'
import '../index.css';
function Navbar() {
  return (
    <>

<header className="text-dr bg-br body-font border-b-2 border-b-dr">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center mb-4 md:mb-0" href='/'>
    <img src="logo192.png" className="h-8 " alt="Flowbite Logo" />
     
      <span className="ml-3 text-xl">Walmart</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center text-dr">
      <a className="mr-5 hover:text-yellow-600" href='/'>First Link</a>
      <a className="mr-5 hover:text-yellow-600" href='/'>Second Link</a>
      <a className="mr-5 hover:text-yellow-600" href='/'>Third Link</a>
      <a className="mr-5 hover:text-yellow-600" href='/'>Fourth Link</a>
    </nav>
    <button className="inline-flex text-white items-center bg-dr border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  </>
  )
}

export default Navbar