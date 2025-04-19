import React, { useState, useEffect } from 'react'
import { FaBalanceScale, FaBars, FaChartLine, FaFileInvoiceDollar, FaMoneyBill, FaSearch, FaTrademark } from 'react-icons/fa'
import { FaDollarSign, FaMoneyBill1Wave } from 'react-icons/fa6'
import useStore from '../../Store/Store.js'
import { useSummary } from '../../hooks/useSummary.js'



const Dashboard = () => {
  const{summary, isLoading, error}= useSummary();
  
  if (error) return <p className="text-red-500">Failed to load summary.</p>;


  return (
    <div className='flex flex-col items-center  h-screen  bg-gray-200  '>

      
       {/* loading here  */}
    {isLoading && (
        <div className="absolute top-1/3 text-blue-500 flex flex-col items-center z-10">
          <div className="w-10 h-10 mb-3 border-4 border-blue-300 border-t-transparent border-dashed rounded-full animate-spin"></div>
          <p className="text-lg font-semibold">Loading summary...</p>
        </div>
      )}
      {/* loading ends */}
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
                <h1 className='text-slate-500 ml-5 font-bold'>{summary?.income}</h1>
               </div>
          </div>
            <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-blue-500 '>
              <div className='flex flex-col justify-center'>
                <div className='rounded-full bg-blue-200 p-1 text-slate-500'><FaChartLine></FaChartLine></div>
              </div>
              <div>
                <h1 className='font-bold'>Total Expenses</h1>
                <h1 className='text-slate-500 ml-5 font-bold'>{summary?.expenses}</h1>
              </div>
            </div>
           <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-red-500 '>
                <div className='flex flex-col justify-center'>
                  <div className='rounded-full bg-red-200 p-1 text-slate-500'><FaBalanceScale></FaBalanceScale></div>
                </div>
              <div>
                <h1 className='font-bold'>Net Balance</h1>
                <h1 className='text-slate-500 ml-5 font-bold'>{summary?.netBalance}</h1>
               </div>
          </div>
            <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-orange-500 '>
              <div className='flex flex-col justify-center'>
                <div className='rounded-full bg-orange-200 p-1 text-slate-500'><FaFileInvoiceDollar></FaFileInvoiceDollar></div>
              </div>
              <div>
                <h1 className='font-bold'>Saving Goal Progress</h1>
                <h1 className='text-slate-500 ml-5 font-bold'>{`${summary?.savingGoal}%`}</h1>
              </div>
            </div>
     </div>
    </div>
  )
}

export default Dashboard