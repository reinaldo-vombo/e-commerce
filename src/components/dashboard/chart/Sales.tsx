"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
   ChartConfig,
   ChartContainer,
   ChartLegend,
   ChartLegendContent,
   ChartTooltip,
   ChartTooltipContent,
} from "@/components/ui/chart"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCurrentPng } from "recharts-to-png"
import DowloadToPngButton from "./DowloadToPngButton"

const chartData = [
   { month: "January", desktop: 186, mobile: 80 },
   { month: "February", desktop: 305, mobile: 200 },
   { month: "March", desktop: 237, mobile: 120 },
   { month: "April", desktop: 73, mobile: 190 },
   { month: "May", desktop: 209, mobile: 130 },
   { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
   desktop: {
      label: "Desktop",
      color: "#2563eb",
   },
   mobile: {
      label: "Mobile",
      color: "#60a5fa",
   },
} satisfies ChartConfig

export function SalesChart() {
   const [getPng, { ref, isLoading }] = useCurrentPng();
   return (
      <Card className="w-full max-w-4xl mx-auto">
         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-2xl font-bold">Vendas</CardTitle>
            <DowloadToPngButton getPng={getPng} isLoading={isLoading} fileName="vendas" />
         </CardHeader>
         <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[400px] w-full">
               <BarChart accessibilityLayer data={chartData} ref={ref}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                     dataKey="month"
                     tickLine={false}
                     tickMargin={10}
                     axisLine={false}
                     tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <ChartLegend content={<ChartLegendContent />} />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                  <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
               </BarChart>
            </ChartContainer>
         </CardContent>
      </Card>

   )
}
