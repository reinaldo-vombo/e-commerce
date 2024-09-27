import { SalesChart } from '@/components/dashboard/chart/Sales'
import OverViewCards from '@/components/dashboard/overview/OverViewCards'
import OrdersTable from '@/components/dashboard/tables/Orders'
import React from 'react'

export default function Orders() {
   return (
      <section>
         <OverViewCards />
         <div className='grid grid-cols-12 gap-4'>
            <div className='col-span-8'>
               <SalesChart />
            </div>
            <div className='col-span-4'></div>
         </div>
         <OrdersTable />
      </section>
   )
}
