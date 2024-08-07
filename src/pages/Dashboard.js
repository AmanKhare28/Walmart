import React, { useState } from 'react'
import SIdebar from '../components/SIdebar'
import Inventory from './Inventory'
import Purchases from './Purchases'
import Sales from './Sales'


function Dashboard() {
    const [inventory, setInventory] = useState(true)
    const [products, setProducts] = useState(false)
    const [sales, setSales] = useState(false)

  return (
    <>
    <SIdebar setinv={setInventory}
             setpro = {setProducts}
             setSales = {setSales}
    />
    
    {inventory && <Inventory/>}
    {products && <Purchases/>}
    {sales && <Sales/>}
    </>
  )
}

export default Dashboard