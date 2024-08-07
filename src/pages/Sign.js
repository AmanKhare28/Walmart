import React from 'react'

function Sign() {
  return (
    <div className="font-[sans-serif]">
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
        <div className="md:max-w-md w-full px-4 py-4">
          <form>
            <div className="mb-12">
              <h3 className="text-gray-800 text-3xl font-extrabold">Create your account</h3>
              <p className="text-sm mt-4 text-gray-800">Already have an account <a href="/Login" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login in </a></p>
            </div>

            <div>
              <label className="text-gray-800 text-xs block mb-2">Name</label>
              <div className="relative flex items-center">
                <input name="name" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter name" />
               
              </div>
            </div>
            <div className='mt-8'>
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input name="email" type="text" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
             
              </div>
            </div>

            <div className="mt-8">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input name="password" type="password" required className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" />
                
              </div>
            </div>

            <div className="mt-12">
              <button type="button" className="w-full shadow-xl py-2.5 px-4 text-sm tracking-wide rounded-md text-white transition-all hover:bg-fuchsia-500 bg-cyan-500 duration-700 focus:outline-none">
                Sign in
              </button>
            </div>
          </form>
        </div>

        <div className="md:h-full  rounded-xl ">
          <img src="login.png" className="w-full h-full object-contain" alt="login-image" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Sign