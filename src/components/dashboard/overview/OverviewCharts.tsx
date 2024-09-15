import React from 'react'
import RevenueChart from '../chart/revenue'
import { SalesChart } from '../chart/Sales'

const OverviewCharts = () => {
   return (
      <section className='grid grid-cols-12 gap-3'>
         <div className='col-span-8'>
            <RevenueChart />
         </div>
         <div className='col-span-4'>
            <SalesChart />
         </div>
      </section>
   )
}

export default OverviewCharts
