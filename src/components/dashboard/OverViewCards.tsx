import { OVERVIEWS } from '@/constant/site-content'
import React from 'react'
import { Card } from '../ui/card'

const OverViewCards = () => {
   return (
      <div className='grid grid-cols-12 gap-4'>
         {OVERVIEWS.map((item) => (
            <div className='col-span-3' key={item.id}>
               <Card className='bg-black border-none p-2 text-white'>
                  <h2 className='text-base'>{item.title}</h2>
               </Card>
            </div>
         ))}
      </div>
   )
}

export default OverViewCards
