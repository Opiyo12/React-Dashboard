import React, { useState } from 'react'
import { FaBalanceScale, FaBars, FaChartLine, FaFileInvoiceDollar, FaMoneyBill, FaSearch, FaTrademark } from 'react-icons/fa'
import { FaDollarSign, FaMoneyBill1Wave } from 'react-icons/fa6'
import useStore from '../../Store/Store.js'
import AccountSummaryApi from './MockApi/AccountSummaryApi'
import { useEffect } from 'react'
import WorkSpaceSummaryData from '../../ApiService/ApiFetch.js'
// import WorkSpaceSummaryData from '../../ApiService/ApiFetch.js'

const Dashboard = () => {
  const setAccountSummary = useStore((state) => state.setAccountSummary);
  const setLoading = useStore((state) => state.setLoading);
  const setError = useStore((state) => state.setError);
  const accountSummary = useStore((state) => state.accountSummary);
  const isLoading= useStore((state)=>state.isLoading);
  const error= useStore((state)=>state.error);
  console.log("Message",WorkSpaceSummaryData)
  const[account, setAccount]= useState(null);
  console.log(account)

  useEffect(()=>{

  WorkSpaceSummaryData().then(response=>{
    setAccount(response.data)
    
    

  })
 

  },[setAccountSummary, setLoading, setError]);
// loading logic
if(isLoading){
  <div><h2>Loading...Please wait</h2></div>
}
if(error){
  <div><h2>Error:{error}</h2></div>

}
  

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
                <h1 className='text-slate-500 ml-5 font-bold'>{account.income}</h1>
               </div>
          </div>
            <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-blue-500 '>
              <div className='flex flex-col justify-center'>
                <div className='rounded-full bg-blue-200 p-1 text-slate-500'><FaChartLine></FaChartLine></div>
              </div>
              <div>
                <h1 className='font-bold'>Total Expenses</h1>
                <h1 className='text-slate-500 ml-5 font-bold'>0.0</h1>
              </div>
            </div>
           <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-red-500 '>
                <div className='flex flex-col justify-center'>
                  <div className='rounded-full bg-red-200 p-1 text-slate-500'><FaBalanceScale></FaBalanceScale></div>
                </div>
              <div>
                <h1 className='font-bold'>Net Balance</h1>
                <h1 className='text-slate-500 ml-5 font-bold'>0.0</h1>
               </div>
          </div>
            <div className='flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 border-l-orange-500 '>
              <div className='flex flex-col justify-center'>
                <div className='rounded-full bg-orange-200 p-1 text-slate-500'><FaFileInvoiceDollar></FaFileInvoiceDollar></div>
              </div>
              <div>
                <h1 className='font-bold'>Saving Goal Progress</h1>
                <h1 className='text-slate-500 ml-5 font-bold'>10</h1>
              </div>
            </div>
     </div>
    </div>
  )
}

export default Dashboard