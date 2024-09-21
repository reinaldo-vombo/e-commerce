import { Plus } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
type TProps = {
   previews: (File & {
      preview: string;
   })[]
}

const AddColoresModal = ({ previews }: TProps) => {
   return (
      <div className='flex items-center justify-center gap-4'>
         {previews.length > 0 ? previews.map((image) => (
            <div className='relative rounded-xl p-2 outline outline-slate-100' key={image.name}>
               <Image src={image.preview} width={80} height={80} alt={image.name} />
            </div>
         )) : (
            <>
               {Array.from({ length: 4 }).map((_, index) => (
                  <div className='relative rounded-xl p-2 outline outline-slate-100' key={index}>
                     <Image src='/shoe-icon.png' width={80} height={80} alt='shoe image' />
                  </div>
               ))}
            </>
         )}
      </div>
   )
}

export default AddColoresModal
