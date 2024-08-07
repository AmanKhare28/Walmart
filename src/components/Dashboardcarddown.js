import React from 'react'

function Dashboardcarddown({price, name, sales, image}) {
  return (
    <>
      <div className="lg:w-1/3 md:w-1/2 p-4 w-full ">
        <div className="flex  h-48 rounded overflow-hidden justify-center ">
          <img alt="shoe" className="object-cover object-center w-2/3 h-full " src={image}/>
        </div>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">{name}</h2>
          <p className="mt-1">Price: ₹{price}</p>
          <p className="mt-1">Sales: {sales} units</p>
        </div>
      </div>
    </>
  )
}

export default Dashboardcarddown