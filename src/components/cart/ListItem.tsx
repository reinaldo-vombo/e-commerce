'use client'
import Image from 'next/image'
import React from 'react'
import IcrementeItem from './IcrementeItem'
import { Icons } from '@/constant/icons'
import EmptyCart from './EmptyCart'
import { AnimatePresence, motion } from 'framer-motion'
import { TListItems } from './type'
import { useCartStore } from '@/store/cartStore'

const ListItem = ({ onPriceChange, cart }: TListItems) => {
   const removeFromCart = useCartStore((state) => state.removeFromCart);

   return (
      <div className='grid gap-8 mt-12'>
         <AnimatePresence mode='popLayout'>
            {cart.length > 0 ? cart.map((product) => (
               <motion.div
                  layout
                  initial={{ opacity: 0, x: -400, scale: 0.5 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 200, scale: 1.2 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  key={product.id}
                  className='flex items-center gap-2'
               >
                  <div className='bg-black w-full text-white rounded-lg p-4 flex items-center justify-between gap-6'>
                     <Image src={product.image} className='rounded-full object-cover size-16' width={90} height={90} alt={product.title} />
                     <div>
                        <h3 className='base-semibold'>{product.title}</h3>
                        <span className='text-gray-400'>Ref. 01105945</span>
                     </div>
                     <div>
                        <h3 className='base-semibold'>Preto</h3>
                     </div>
                     <IcrementeItem
                        basePrice={product.price}
                        productId={product.id}
                        onPriceChange={(newPrice) => onPriceChange(newPrice, product.id,)}
                     />
                     <div className='w-32'>
                        <h3 className='base-semibold'>{product.price} (kz)</h3>
                     </div>
                  </div>
                  <button type='button' aria-label='x icon' onClick={() => removeFromCart(product.id)}>
                     <Icons.x width={25} />
                  </button>
               </motion.div>
            )) : <EmptyCart />}
         </AnimatePresence>
      </div>)
}

export default ListItem
