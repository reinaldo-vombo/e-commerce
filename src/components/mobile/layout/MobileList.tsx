'use client'
import { PRODUCTS } from '@/constant/site-content'
import React, { useState } from 'react'
import ListCard from '../ListCard';
import { AnimatePresence, motion } from 'framer-motion';
import { ScrollArea } from '@/components/ui/scroll-area';
import MobileProductPreview from '../MobileProductPreview';
import PurchaseTab from '../bottomNav/PurchaseTab';
import { TProduct } from '@/components/product/type';
type TProps = {
   products: TProduct[]
}

const MobileList = ({ products }: TProps) => {
   const [selectedId, setSelectedId] = useState<string | null>(null);
   const product = products.find(item => item.id === selectedId)

   return (
      <>
         <div className="grid gap-4 md:hidden">
            {products.map((item, index) => index < 5 && (
               <ListCard props={item} key={item.id} onChange={setSelectedId} />
            ))}
         </div>
         <AnimatePresence>
            {selectedId && (
               <motion.div
                  layoutId={selectedId}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  style={{
                     position: 'fixed',
                     top: 0,
                     left: 0,
                     right: 0,
                     bottom: 0,
                     background: 'white',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center',
                     zIndex: 1000,
                  }}
               >
                  <ScrollArea className='h-[1011px]'>
                     <MobileProductPreview
                        props={product}
                        setSelectedId={setSelectedId} />
                     <PurchaseTab />
                  </ScrollArea>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   )
}

export default MobileList
