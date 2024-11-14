'use client'
import React, { useState } from 'react'
import ListCard from '../ListCard';
import MobileProductPreview from '../MobileProductPreview';
import PurchaseTab from '../bottomNav/PurchaseTab';
import { TProduct } from '@/components/product/type';
import ModalTansition from '@/components/shared/AnimatedModal';
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
         <ModalTansition
            isOpen={!!selectedId}
            onClose={() => setSelectedId(null)}
            layoutId={selectedId || ""}
         >
            {product && (
               <>
                  <MobileProductPreview
                     props={product}
                     setSelectedId={setSelectedId} />
                  <PurchaseTab />
               </>
            )}
         </ModalTansition>
      </>
   )
}

export default MobileList;
