import React from 'react'
import { useTransaction } from './hooks/useTransaction.js'
import Loading from './Loading.jsx';


 const Transaction = () => {
  const{transactions, isLoading, error}= useTransaction();
  if (error) return <p className="text-red-500">Failed to load Transaction.</p>;

  


  return (
    
    
    <div className='flex flex-col items-center h-screen bg-gray-200'>
    {isLoading &&(
      <Loading/>
    )
    }
  <div className='flex bg-white h-10 items-center p-6 rounded mt-10  '>
    <h1 className=' font-bold text-blue-500'>Welcome to the Overall  Transaction List </h1>
  </div>
  <div className='mt-5'>
<table className=" bg-white border border-gray-200 ">
   
      <tr className='text-gray-600 bg-gray-300'>
        <th className="px-4 py-2 border">ID</th>
        <th className="px-4 py-2 border">Date</th>
        <th className="px-4 py-2 border">Description</th>
        <th className="px-4 py-2 border">Category</th>
        <th className="px-4 py-2 border">Amount</th>
        <th className="px-4 py-2 border">Type</th>
      </tr>

      <tbody>
      {transactions?.map((tx) => (
        <tr key={tx.id} className="hover:bg-gray-400">
          <td className="px-4 py-2 border">{tx.id}</td>
          <td className="px-4 py-2 border">{tx.date}</td>
          <td className="px-4 py-2 border">{tx.description}</td>
          <td className="px-4 py-2 border">{tx.category}</td>
          <td className="px-4 py-2 border text-right">
            <span className={tx.type === 'Income' ? 'text-green-600' : 'text-red-600'}>
              Shs. {tx.amount}
            </span>
          </td>
          <td className="px-4 py-2 border capitalize">{tx.type}</td>
        </tr>
      ))}
    </tbody>
    
</table>
</div>

</div>
  )
}
export default Transaction
