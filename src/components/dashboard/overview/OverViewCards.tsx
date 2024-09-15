import { OVERVIEWS } from '@/constant/site-content'
import React from 'react'
import { Card } from '../../ui/card'
import { TrendingDown, TrendingUp, } from 'lucide-react'

const OverViewCards = () => {
   return (
      <div className='grid grid-cols-12 gap-4'>
         {OVERVIEWS.map((item) => {
            const status = item.total >= item.new
            return (
               <div className='col-span-3' key={item.id}>
                  <Card className='dark:border-none p-4'>
                     <div className='flex items-center justify-between'>
                        <h2 className='text-base'>{item.title}</h2>
                        {item.icon}
                     </div>
                     <div className='mt-4 space-y-5'>
                        <h3 className='h3-bold'>{item.total}</h3>
                        <div className='flex items-center justify-between gap-5 text-xs'>
                           <span className={`${status ? 'text-green-500' : 'text-red-500'} flex items-center gap-2`}>
                              {status ? <TrendingUp /> : <TrendingDown />}
                              {item.new} %
                           </span>
                           <span>Comparado ao mês passado</span>
                        </div>
                     </div>
                  </Card>
               </div>
            )
         }
         )}
      </div>
   )
}

export default OverViewCards
