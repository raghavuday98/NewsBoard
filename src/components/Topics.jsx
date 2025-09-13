import React from 'react'

function Topics() {
  return (
    <div className='mt-10 mr-38 ml-38 '>

           <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-slate-800">Latest News</h2>
                <div className="hidden md:flex items-center space-x-2 p-1 bg-slate-200/50 rounded-full">
                 <div className='px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700'>All</div>
                 <div className='px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700'>Technology</div>
                 <div className='px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700'>Politics</div>
                 <div className='px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700'>Business</div>
                 <div className='px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700'>Health</div>
                 <div className='px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 bg-white text-slate-600 hover:bg-blue-100 hover:text-blue-700'>Sports</div>
                </div>
            </div>
    </div>
    
  )
}

export default Topics