import Breadcrumbe from '@/components/dashboard/Breadcrumbe'
import OverViewCards from '@/components/dashboard/overview/OverViewCards'
import OverviewCharts from '@/components/dashboard/overview/OverviewCharts'
import OverViewTable from '@/components/dashboard/overview/OverViewTable'

export default function page() {
   return (
      <section className='space-y-5'>
         <Breadcrumbe title='Overview' />
         <OverViewCards />
         <OverviewCharts />
         <OverViewTable />
      </section>
   )
}
