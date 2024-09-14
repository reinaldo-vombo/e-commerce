import Breadcrumbe from '@/components/dashboard/Breadcrumbe'
import OverViewCards from '@/components/dashboard/OverViewCards'
import OverviewCharts from '@/components/dashboard/OverviewCharts'
import React from 'react'

export default function page() {
   return (
      <section className='space-y-5'>
         <Breadcrumbe title='Overview' />
         <OverViewCards />
         <OverviewCharts />
      </section>
   )
}
