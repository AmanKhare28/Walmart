import React from 'react'

function Main() {
  return (
    <div className='bg-br '>
    <div className=" container mx-auto  p-20">

      <div className="flex items-center flex-wrap  mb-10">
        
        <div className="shadow-big-l w-full lg:w-1/4 md:w-1/3 bg-dr p-5 rounded lg:ml-auto  ">
          <h4 className="text-3xl  text-white font-semibold mb-5">Top Sellers</h4>

          <div className='flex bg-light-dr ' >
            <img className='w-1/3 h-1/3 2xl:block md:hidden sm:block hidden' src="show1.png" alt="show" />

            <div className='' >
          <h1 className="p-2 mt-6 md:mt-0 text-yellow-400 font-bold text-3xl md:text-2xl ">Nike Air Force 1</h1>
            <p className='px-2 text-white'>Price: <span className='text-yellow-300' >₹4000/-</span></p>
            <p className='px-2 text-white'>Sales: <span className='text-yellow-300 mb-2 ' >400 unites</span> </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 ml-auto mt-20">
         
            <h1 className='text-dr text-5xl font-bold mb-5'>Data-Driven Insights</h1>
            <p className='text-xl text-dr mb-2  ' >Identify Your Best Performers with Top Seller Insights.</p>
          
        </div>
        
      </div>

      <div className="flex  flex-wrap mb-20 mt-32">
        
        <div className="w-full md:w-1/2 ml-auto mb-14">
         
            <h1 className='text-dr text-5xl font-bold mb-5'>Low Stock Alerts</h1>
            <p className='text-xl text-dr lg:w-1/2 ' >Notifications when inventory dips below a set threshold, preventing stockouts and lost sales.</p>
          
        </div>
      <div className="shadow-big-r w-full lg:w-1/4 md:w-1/3 bg-dr p-5 rounded lg:mr-auto ">
          <h4 className="text-3xl  text-white font-semibold mb-5">Low Stock Items</h4>

          <div className='flex bg-light-dr ' >
            <img className='w-1/3 h-1/3 2xl:block md:hidden sm:block hidden' src="show1.png" alt="show" />

            <div className='' >
          <h1 className="p-2 mt-6 md:mt-0 text-yellow-400 font-bold text-3xl md:text-2xl ">Nike Air Force 1</h1>
            <p className='px-2 text-white'>Price: <span className='text-yellow-300' >₹4000/-</span></p>
            <p className='px-2 mb-2  text-white'>Remaining Stock: <span className='text-yellow-300' >400 unites</span> </p>
            </div>
          </div>

          <div className='flex bg-light-dr mt-5' >
            <img className='w-1/3 h-1/3 2xl:block md:hidden sm:block hidden' src="tshirt1.png" alt="show" />

            <div className='' >
          <h1 className="p-2 mt-6 md:mt-0 text-yellow-400 font-bold text-3xl md:text-2xl ">White T-Shirt</h1>
            <p className='px-2 text-white'>Price: <span className='text-yellow-300' >₹500/-</span></p>
            <p className='px-2 mb-2 text-white'>Remaining Stock: <span className='text-yellow-300' >400 unites</span> </p>
            </div>
          </div>
        </div>

      </div>

    </div>
    </div>
  )
}

export default Main