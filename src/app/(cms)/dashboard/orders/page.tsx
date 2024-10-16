import { SalesChart } from '@/components/dashboard/chart/Sales'
import OverViewCards from '@/components/dashboard/overview/OverViewCards'
import OrdersTable from '@/components/dashboard/tables/Orders'
import React from 'react'

export default function Orders() {
   return (
      <section>
         <OverViewCards />
         <OrdersTable />
      </section>
   )
}
