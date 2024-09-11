'use client'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { IcrementeItemProps } from './type';

const IcrementeItem = ({ basePrice, productId, onPriceChange }: IcrementeItemProps) => {
   const [items, setItems] = useState(1);
   const [totalPrice, setTotalPrice] = useState(basePrice);
   const increseItem = () => {
      setItems(pv => pv + 1);
   };

   const decreseItem = () => {
      if (items >= 2) {
         setItems(pv => pv - 1);
      }
   };

   useEffect(() => {
      const updatedPrice = items * basePrice;
      setTotalPrice(updatedPrice);
      onPriceChange(updatedPrice, productId);
   }, [items, basePrice]);
   return (
      <div className='flex items-center gap-2'>
         <button type='button' aria-label='minus icon' onClick={decreseItem}><MinusCircleIcon width={50} /></button>
         <span>{items}</span>
         <button type='button' aria-label='plus icon' onClick={increseItem}><PlusCircleIcon width={50} /></button>
      </div>
   )
}

export default IcrementeItem
