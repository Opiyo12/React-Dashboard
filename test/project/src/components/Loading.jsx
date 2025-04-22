import React from 'react'

const Loading = () => {
  return (
    <div className="absolute top-1/3 text-blue-500 flex flex-col items-center z-10">
          <div className="w-10 h-10 mb-3 border-4 border-blue-300 border-t-transparent border-dashed rounded-full animate-spin"></div>
          <p className="text-lg font-semibold">Loading summary...</p>
     </div>
  )
}

export default Loading