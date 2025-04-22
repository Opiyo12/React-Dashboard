import React from 'react'

const SummaryCard = ({color,icon, name, amount}) => {
  return (
    <div className={`flex mt-10 gap-4 bg-white p-4 rounded-2xl border-l-5 ${color} `}>
                <div className='flex flex-col justify-center'>
                  <div className='rounded-full bg-green-200 p-1 text-slate-500'>{icon}</div>
                </div>
              <div>
                <h1 className='font-bold'>{name}</h1>
                <h1 className='text-slate-500 ml-5 font-bold'>{amount}</h1>
               </div>
          </div>
  )
}

export default SummaryCard