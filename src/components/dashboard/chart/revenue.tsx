"use client"

import { useState } from 'react'
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer
} from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCurrentPng, } from 'recharts-to-png'

import DowloadToPngButton from './DowloadToPngButton'

// Sample data for the chart
const salesData = [
   { date: '2023-06-01', sales: 1200 },
   { date: '2023-06-02', sales: 1900 },
   { date: '2023-06-03', sales: 1500 },
   { date: '2023-06-04', sales: 2100 },
   { date: '2023-06-05', sales: 2400 },
   { date: '2023-06-06', sales: 1800 },
   { date: '2023-06-07', sales: 2200 },
   { date: '2023-06-08', sales: 2600 },
   { date: '2023-06-09', sales: 2900 },
   { date: '2023-06-10', sales: 3100 },
   { date: '2023-06-11', sales: 2800 },
   { date: '2023-06-12', sales: 2500 },
   { date: '2023-06-13', sales: 2700 },
   { date: '2023-06-14', sales: 3000 },
   { date: '2023-06-15', sales: 3300 },
   { date: '2023-06-16', sales: 3200 },
   { date: '2023-06-17', sales: 3400 },
   { date: '2023-06-18', sales: 3600 },
   { date: '2023-06-19', sales: 3500 },
   { date: '2023-06-20', sales: 3700 },
   { date: '2023-06-21', sales: 3900 },
   { date: '2023-06-22', sales: 4100 },
   { date: '2023-06-23', sales: 4000 },
   { date: '2023-06-24', sales: 4200 },
   { date: '2023-06-25', sales: 4400 },
   { date: '2023-06-26', sales: 4300 },
   { date: '2023-06-27', sales: 4500 },
   { date: '2023-06-28', sales: 4700 },
   { date: '2023-06-29', sales: 4600 },
   { date: '2023-06-30', sales: 4800 },
]

export default function RevenueChart() {
   const [timeRange, setTimeRange] = useState('30')

   const filteredData = salesData.slice(-parseInt(timeRange))
   const [getPng, { ref, isLoading }] = useCurrentPng();

   // Can also pass in options for html2canvas
   // const [getPng, { ref }] = useCurrentPng({ backgroundColor: '#000' });
   return (
      <Card className="w-full mx-auto">
         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">Orcamento Total</CardTitle>
            <div className='flex items-center gap-5'>
               <Select
                  value={timeRange}
                  onValueChange={(value) => setTimeRange(value)}
               >
                  <SelectTrigger className="w-[180px]">
                     <SelectValue placeholder="Select time range" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="7">Last 7 days</SelectItem>
                     <SelectItem value="14">Last 14 days</SelectItem>
                     <SelectItem value="30">Last 30 days</SelectItem>
                  </SelectContent>
               </Select>
               <DowloadToPngButton getPng={getPng} isLoading={isLoading} fileName='orcamento' />
            </div>
         </CardHeader>
         <CardContent>
            <ResponsiveContainer className={'min-h-[400px] w-full'} >
               <LineChart
                  ref={ref}
                  data={filteredData}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                     dataKey="date"
                     tickFormatter={(value) => new Date(value).toLocaleDateString()}
                  />
                  <YAxis />
                  <Tooltip
                     labelFormatter={(value) => new Date(value).toLocaleDateString()}
                     formatter={(value) => [`$${value}`, 'Sales']}
                  />
                  <Legend />
                  <Line
                     type="monotone"
                     dataKey="sales"
                     stroke="hsl(var(--primary))"
                     activeDot={{ r: 8 }}
                  />
               </LineChart>
            </ResponsiveContainer>
         </CardContent>
      </Card>
   )
}