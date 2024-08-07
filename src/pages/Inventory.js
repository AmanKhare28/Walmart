import React from 'react'
import Dashboardcartup from '../components/Dashboardcartup'
import Dashboardcarddown from '../components/Dashboardcarddown'

function Inventory() {
  return (
    <>
    
    <h1 className='flex justify-center text-2xl font-semibold mt-5' >
      Hey!, Name
    </h1>
    <section className=" topdasboard text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 bg-gray-400 justify-center">

      <Dashboardcartup num={123456} title={'Total'}/>
      <Dashboardcartup num={123456} title={'Active products'}/>
      <Dashboardcartup num={123456} title={'Inactive products'}/>

    </div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      
    <Dashboardcarddown price={'400'} name={'Nike Air Force 1'} sales={'16.00'} image={'show1.png'}/>
    <Dashboardcarddown price={'400'} name={'Nike Air Force 1'} sales={'16.00'} image={'show1.png'}/>
    <Dashboardcarddown price={'400'} name={'Nike Air Force 1'} sales={'16.00'} image={'show1.png'}/>
    <Dashboardcarddown price={'400'} name={'Nike Air Force 1'} sales={'16.00'} image={'show1.png'}/>
    <Dashboardcarddown price={'400'} name={'Nike Air Force 1'} sales={'16.00'} image={'show1.png'}/>
    <Dashboardcarddown price={'400'} name={'Nike Air Force 1'} sales={'16.00'} image={'show1.png'}/>
    
   
    </div>
  </div>
</section>
    </>
  )
}

export default Inventory