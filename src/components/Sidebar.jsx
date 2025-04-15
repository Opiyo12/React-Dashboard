import React from 'react'
import { Link } from 'react-router-dom'
import { FaChartBar, FaCog, FaHome, FaMoneyBill, FaPoll, FaRegEnvelope, FaRegFileAlt } from 'react-icons/fa'
import { FaGear, FaMoneyBillTransfer } from 'react-icons/fa6'


const Sidebar = () => {
  return (
    <div className='w-64 bg-white fixed h-full px-4 py-2 dashboard shadow-xl '>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-gray-800 font-bold '>Admin Dashbaord</h1>
      </div>
        <hr className='text-gray-800 font-bold text-2xl'/>
         <ul className='mt-3 text-gray-800 font-bold'>
          <li className=' rounded hover:shadow hover:bg-gray-300 py-2 px-3 '>
            <Link to="/dashboard"><FaChartBar className='inline-block w-4 h-4 mr-2 -mt-2'></FaChartBar>Dashboard</Link>
          </li>
          <li className=' rounded hover:shadow hover:bg-gray-300 py-2 px-3'>
            <Link to="/transaction"><FaMoneyBillTransfer className='inline-block w-4 h-4 mr-2 -mt-2'></FaMoneyBillTransfer>Transaction</Link>
          </li>
          <li className=' rounded hover:shadow hover:bg-gray-300 py-2 px-3'>
            <Link to="/settings"><FaGear className='inline-block w-4 h-4 mr-2 -mt-2 '></FaGear>Settings</Link>
          </li>
         </ul>
    </div>

  )
}

export default Sidebar