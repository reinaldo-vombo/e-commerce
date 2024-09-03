'use client'
import { PRODUCTS } from '@/constant/site-content'
import Image from 'next/image'
import React, { useState } from 'react'
import IcrementeItem from './IcrementeItem'
import { Icons } from '@/constant/icons'
import EmptyCart from './EmptyCart'
import { AnimatePresence, motion } from 'framer-motion'
import { toast } from 'sonner'

const ListItem = () => {
   const [products, setProducts] = useState(PRODUCTS);

   const handleRemove = (id: string) => {
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      toast.success('Item removido')
   };
   const handlePriceChange = (id: string, newPrice: number) => {
      setProducts((prevProducts) =>
         prevProducts.map((product) =>
            product.id === id ? { ...product, price: newPrice } : product
         )
      );
   };
   return (
      <div className='grid gap-8 mt-12'>
         <AnimatePresence>
            {products.length > 0 ? products.map((product) => (
               <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
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
                     <IcrementeItem basePrice={product.price} onPriceChange={(newPrice) => handlePriceChange(product.id, newPrice)} />
                     <div className='w-32'>
                        <h3 className='base-semibold'>{product.price} (kz)</h3>
                     </div>
                  </div>
                  <button type='button' aria-label='Remove item' onClick={() => handleRemove(product.id)}>
                     <Icons.x width={25} />
                  </button>
               </motion.div>
            )) : <EmptyCart />}
         </AnimatePresence>
      </div>)
}

export default ListItem
