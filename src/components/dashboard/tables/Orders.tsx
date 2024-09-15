import { useState } from 'react'
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { ChevronDown, MoreHorizontal } from "lucide-react"

// Sample data for the table
const orders = [
   { id: '1001', customer: 'John Doe', date: '2023-06-01', total: 125.99, status: 'Completed' },
   { id: '1002', customer: 'Jane Smith', date: '2023-06-02', total: 89.99, status: 'Processing' },
   { id: '1003', customer: 'Bob Johnson', date: '2023-06-03', total: 199.99, status: 'Shipped' },
   { id: '1004', customer: 'Alice Brown', date: '2023-06-04', total: 149.99, status: 'Pending' },
   { id: '1005', customer: 'Charlie Davis', date: '2023-06-05', total: 75.99, status: 'Completed' },
]

export default function OrdersTable() {
   const [searchTerm, setSearchTerm] = useState('')

   const filteredOrders = orders.filter(order =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase())
   )

   return (
      <div className="mx-auto py-10">
         <h1 className="text-2xl font-bold mb-4">Ecommerce Orders</h1>
         <div className="flex justify-between items-center mb-4">
            <Input
               placeholder="Search orders..."
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="max-w-sm"
            />
            <Button>
               <ChevronDown className="mr-2 h-4 w-4" /> Export
            </Button>
         </div>
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                     <TableCell className="font-medium">{order.id}</TableCell>
                     <TableCell>{order.customer}</TableCell>
                     <TableCell>{order.date}</TableCell>
                     <TableCell>${order.total.toFixed(2)}</TableCell>
                     <TableCell>{order.status}</TableCell>
                     <TableCell>
                        <DropdownMenu>
                           <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                 <span className="sr-only">Open menu</span>
                                 <MoreHorizontal className="h-4 w-4" />
                              </Button>
                           </DropdownMenuTrigger>
                           <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>Update status</DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem>Cancel order</DropdownMenuItem>
                           </DropdownMenuContent>
                        </DropdownMenu>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   )
}