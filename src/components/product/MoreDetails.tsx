'use client'
import SheetModal from '../shared/SheetModal'
import { Icons } from '@/constant/icons'
import Image from 'next/image'
import CardRating from './CardRating'
import { Separator } from '../ui/separator'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { TProductModal } from './type'
import Options from './Options'

const MoreDetails = ({ title, image, price }: TProductModal) => {
   const [itemsCount, setItemsCount] = useState(1)
   const increse = () => {
      setItemsCount(pv => pv + 1)
   }
   const decrese = () => {
      if (itemsCount >= 2) {
         setItemsCount(pv => pv - 1)
      }
   }
   return (
      <SheetModal side='bottom' trigger={<Icons.eye width={20} />}>
         <div className='container grid grid-cols-12 gap-8'>
            <div className='col-span-4'>
               <div className='space-y-3'>
                  <h2 className='h3-bold'>{title}</h2>
                  <span className='text-gray-300'>Sapatilhas</span>
                  <div className='flex items-center justify-between'>
                     <CardRating />
                     <h3 className='font-semibold'>{price} (kz)</h3>
                  </div>
               </div>
               <Separator />
               <div className='space-y-3 mt-4'>
                  <div>
                     <b>Detalhes do Produto</b>
                  </div>
                  <div className='flex items-center justify-between'>
                     <b>Material:</b>
                     <span>100% algudão, 50% polyester</span>
                  </div>
                  <div className='flex items-center justify-between'>
                     <b>Origen:</b>
                     <span>Importado</span>
                  </div>
                  <div className='flex items-center justify-between'>
                     <b>Instruções de cuidado:</b>
                     <span>Maquina de lavar</span>
                  </div>
               </div>
            </div>
            <div className='col-span-4 flex flex-col justify-center items-center space-y-4'>
               <div className='relative h-[21rem] w-[21rem]'>
                  <Image src={image} className='rounded-md' fill alt='text' />
               </div>
               <div className='flex items-center justify-between gap-7'>
                  <motion.button whileTap={{ scale: 0.8 }} onClick={decrese}><MinusCircleIcon width={50} className='hover:text-red-500' /></motion.button>
                  <b>{itemsCount}</b>
                  <motion.button whileTap={{ scale: 0.8 }} onClick={increse}><PlusCircleIcon width={50} className='hover:text-green-500' /></motion.button>
               </div>
            </div>
            <Options />
         </div>
      </SheetModal>
   )
}

export default MoreDetails
