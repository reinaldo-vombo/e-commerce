'use client'
import { BRANDS } from '@/constant/site-content'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
const FITER = [
   {
      id: '1ergerrgerg',
      name: 'Tenis',
      icon: '/cleats.png'
   },
   {
      id: 'regregreg',
      name: 'Tshirts',
      icon: '/tshirt.png'
   },
   {
      id: 'regegergergerg',
      name: 'Calsças',
      icon: '/pants.png'
   },
   {
      id: 'ergegergrgrgre',
      name: 'Acessesorios',
      icon: '/accessories.png'
   },
]

const FitersSection = () => {
   const [selectedIdx, setSelectedIdx] = useState<string | null>(null)
   const handleSelectedItem = (id: string) => {
      setSelectedIdx(id)
   }
   return (
      <section className='block sm:hidden mt-6 container space-y-7'>
         <div className='flex items-center justify-between'>
            {BRANDS.map((item) => (
               <motion.div className={`p-2 rounded-lg w-fit flex items-center gap-2 text-white cursor-pointer transition-colors ${selectedIdx === item.id ? 'bg-neutral-700' : 'bg-slate-100'}`} key={item.id} onClick={() => handleSelectedItem(item.id)}>
                  <motion.div className='relative size-[3.5rem]'>
                     {item.logo}
                  </motion.div>
               </motion.div>
            ))}
         </div>
         <div className='flex items-center justify-between'>
            {FITER.map((item) => (
               <motion.div className={`p-2 rounded-lg w-fit flex items-center gap-2 text-white cursor-pointer transition-colors ${selectedIdx === item.id ? 'bg-neutral-700' : 'bg-slate-100'}`} key={item.id} onClick={() => handleSelectedItem(item.id)}>
                  <motion.div className='relative size-[3.5rem]'>
                     <Image src={item.icon} fill sizes='100%' alt={item.name} />
                  </motion.div>
                  {/* <motion.span
                     initial={{ width: 0, opacity: 0 }}
                     animate={{ width: selectedIdx === item.id ? 'auto' : 0, opacity: selectedIdx === item.id ? 1 : 0 }}
                  >{item.name}</motion.span> */}
               </motion.div>
            ))}
         </div>
      </section>
   )
}

export default FitersSection;
