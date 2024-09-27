import Image from 'next/image'
import React from 'react'

const AddColoresModal = () => {
   return (
      <div className='flex items-center justify-center gap-4'>
         {Array.from({ length: 4 }).map((_, index) => (
            <div className='relative rounded-xl p-2 outline outline-slate-100' key={index}>
               <Image src='/shoe-icon.png' width={80} height={80} alt='shoe image' />
            </div>
         ))}
      </div>
   )
}

export default AddColoresModal
