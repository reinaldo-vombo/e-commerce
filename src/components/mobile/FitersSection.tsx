'use client'
import { BRANDS, MOBILECATEGORY } from '@/constant/site-content'
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const FitersSection = () => {
   const router = useRouter()
   const pathname = usePathname()
   const searchParams = useSearchParams()
   const [selectedIdx, setSelectedIdx] = useState<string | null>(null)
   const handleSelectedItem = (id: string) => {
      setSelectedIdx(id)
   }
   const brand = searchParams.get('brand')
   const category = searchParams.get('category')
   const createQueryString = useCallback(
      (name: string, value: string) => {
         const params = new URLSearchParams(searchParams.toString())
         params.set(name, value)

         return params.toString()
      },
      [searchParams]
   )
   return (
      <section className='block sm:hidden mt-6 container space-y-7'>
         <div className='flex items-center justify-between'>
            {BRANDS.map((item) => (
               <motion.div className={`p-2 rounded-lg w-fit flex items-center gap-2 text-white cursor-pointer transition-colors shadow ${brand === item.value ? 'bg-red-500' : 'bg-white'}`} key={item.id} onClick={() => handleSelectedItem(item.id)}>
                  <motion.button type='button' aria-label={item.value} className='relative size-[3rem] flex items-center justify-center' onClick={() => {
                     // <pathname>?sort=asc
                     router.push(pathname + '?' + createQueryString('brand', item.value))
                  }}>
                     {item.logo}
                  </motion.button>
               </motion.div>
            ))}
         </div>
         <div className='flex items-center justify-between'>
            {MOBILECATEGORY.map((item) => (
               <motion.div className={`p-2 rounded-lg w-fit flex items-center gap-2 text-white cursor-pointer transition-colors ${category === item.value ? 'bg-red-500' : 'bg-slate-100'}`} key={item.id} onClick={() => handleSelectedItem(item.id)}>
                  <motion.button type='button' aria-label={item.value} className='relative size-[3rem] flex items-center justify-center' onClick={() => {
                     // <pathname>?sort=asc
                     router.push(pathname + '?' + createQueryString('category', item.value))
                  }}>
                     {item.logo}
                  </motion.button>
               </motion.div>
            ))}
         </div>
      </section>
   )
}

export default FitersSection;
