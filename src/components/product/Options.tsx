import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Options = () => {
   const [selectedSize, setSelectedSize] = useState<number | null>(null)

   const handleSizeSelecte = (sizeIdx: number) => {
      setSelectedSize(sizeIdx)
   }
   return (
      <div className='col-span-4 space-y-4'>
         <div className='space-y-2'>
            <b>Cores disponivel</b>
            <div className='flex items-center flex-wrap gap-4'>
               {Array.from({ length: 5 }).map((_, i) => (
                  <div className='bg-slate-100 p-2 rounded-md cursor-pointer' key={i}>
                     <Image src={'/product/AIR+MAX+DNB-nbg.png'} width={100} height={100} alt={`color-${i}`} />
                  </div>
               ))}
            </div>
         </div>
         <div className='space-y-2'>
            <b>Tabela de tamanho</b>
            <div className='flex items-center flex-wrap gap-4'>
               {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                     whileTap={{ scale: 0.5 }}
                     className={`bg-slate-100 p-6 rounded-md cursor-pointer ${selectedSize === i ? 'outline outline-1 outline-black' : ''}`}
                     key={i}
                     onClick={() => handleSizeSelecte(i)}
                  >
                     <b>{i * 5}</b>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default Options
