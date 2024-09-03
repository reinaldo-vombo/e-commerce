'use client'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import React, { useEffect, useState } from 'react'
import { IcrementeItemProps } from './type';

const IcrementeItem = ({ basePrice, onPriceChange }: IcrementeItemProps) => {
   const [items, setItems] = useState(1);
   const totalPrice = items * basePrice;
   const increseItem = () => {
      setItems(pv => pv + 1);
   };

   const decreseItem = () => {
      if (items >= 2) {
         setItems(pv => pv - 1);
      }
   };

   useEffect(() => {
      onPriceChange(totalPrice);
   }, [items]);
   return (
      <div className='flex items-center gap-2'>
         <span>{items}</span>
         <div className='grid gap-3'>
            <button type='button' aria-label='plus icon' onClick={increseItem}><PlusCircleIcon width={50} /></button>
            <button type='button' aria-label='minus icon' onClick={decreseItem}><MinusCircleIcon width={50} /></button>
         </div>
      </div>
   )
}

export default IcrementeItem
