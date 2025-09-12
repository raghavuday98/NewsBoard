import React from 'react'

function Topics() {
  return (
    <div className='h-15 w-full flex items-center gap-3 border-b-2 pl-30 border-zinc-300 text-zinc-800'>
        <h3 className='font-["Newsreader"] font-bold text-md'>Topics:</h3>
        <div className='flex items-center p-2 w-fit h-7 rounded-full font-["Newsreader"] bg-zinc-100 hover:bg-[#3dd1e5]'>All</div>
        <div className='flex items-center p-2 w-fit h-7 rounded-full font-["Newsreader"] bg-zinc-100 hover:bg-[#3dd1e5]'>Technology</div>
        <div className='flex items-center p-2 w-fit h-7 rounded-full font-["Newsreader"] bg-zinc-100 hover:bg-[#3dd1e5]'>Politics</div>
        <div className='flex items-center p-2 w-fit h-7 rounded-full font-["Newsreader"] bg-zinc-100 hover:bg-[#3dd1e5]'>Business</div>
        <div className='flex items-center p-2 w-fit h-7 rounded-full font-["Newsreader"] bg-zinc-100 hover:bg-[#3dd1e5]'>Health</div>
        <div className='flex items-center p-2 w-fit h-7 rounded-full font-["Newsreader"] bg-zinc-100 hover:bg-[#3dd1e5]'>Sports</div>
        <div className='flex items-center p-2 w-fit h-7 rounded-full font-["Newsreader"] bg-zinc-100 hover:bg-[#3dd1e5]'>Arts</div>
        <div className='flex items-center'></div>
    </div>
  )
}

export default Topics