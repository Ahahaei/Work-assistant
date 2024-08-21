import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import clsx from 'clsx'
const Tasktitle = ({label, className}) => {
  return (
    <div className='w-full h-10 md:h-12 px-2 md:px-4 rounded bg-white flex items-center justify-between'>
        <div className='flex gap-2 items-center'>
            <div className={clsx("w-4 h-4 rounded-full", className)}/>
            <p className='text-sm md:text-base text-gray-600'>{label}</p>
        </div>

        <button className='hidden md:black'>
            <IoMdAdd className='text-lg text-black '/>
        </button>

      
    </div>
  )
}

export default Tasktitle
