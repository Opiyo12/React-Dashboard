import React from 'react'
import { FaBars, FaMoneyBill, FaSearch, FaTrademark } from 'react-icons/fa'
import { FaDollarSign, FaMoneyBill1Wave } from 'react-icons/fa6'

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center  h-screen  bg-gray-200  '>
     <div className='flex bg-white h-10 items-center p-6 rounded mt-10  '>
      <h1 className=' font-bold text-blue-500'>Welcome to the Overall Transaction Summary </h1>
      </div>
      {/* cards */}
     <div className='flex gap-5 ml-40 flex-wrap '>
           <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-green-500 '>
                <div className='flex flex-col justify-center'>
                  <div className='rounded-full bg-green-200 p-1 text-slate-500'><FaDollarSign></FaDollarSign></div>
                </div>
              <div>
                <h1 className='font-bold'>Total Income</h1>
                <h1 className='text-slate-500 ml-5'>0.0</h1>
               </div>
          </div>
            <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-blue-500 '>
              <div className='flex flex-col justify-center'>
                <div className='rounded-full bg-blue-200 p-1 text-slate-500'><FaDollarSign></FaDollarSign></div>
              </div>
              <div>
                <h1 className='font-bold'>Total Expenses</h1>
                <h1 className='text-slate-500 ml-5'>0.0</h1>
              </div>
            </div>
           <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-green-500 '>
                <div className='flex flex-col justify-center'>
                  <div className='rounded-full bg-green-200 p-1 text-slate-500'><FaDollarSign></FaDollarSign></div>
                </div>
              <div>
                <h1 className='font-bold'>Net Balance</h1>
                <h1 className='text-slate-500 ml-5'>0.0</h1>
               </div>
          </div>
            <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-green-500 '>
              <div className='flex flex-col justify-center'>
                <div className='rounded-full bg-green-200 p-1 text-slate-500'><FaDollarSign></FaDollarSign></div>
              </div>
              <div>
                <h1 className='font-bold'>Saving Goal Progress</h1>
                <h1 className='text-slate-500 ml-5'>0.0</h1>
              </div>
            </div>
     </div>
    </div>
  )
}

export default Dashboard