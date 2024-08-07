import React from 'react'

function Dashboardcartup({num,title}) {
  return (
   <>
   <div className="p-4 md:w-1/3 w-4/5 ">
        <div className=" border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="lg:h-28 md:h-16 h-20 p-2 w-full object-cover object-center" >
            <h1 className=' flex items-center h-full justify-center text-2xl'>{title}</h1>
          </div>
          <div className="w-full flex justify-center">
           
            <div className="mb-3 text- flex justify-center items-center bg-gray-500 md:rounded-full rounded-md px-8 md:px-0  text-2xl p-4  md:w-1/2">{num}</div>

          </div>
        </div>
      </div>
   </>
  )
}

export default Dashboardcartup