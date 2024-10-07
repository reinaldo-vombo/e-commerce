'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Pencil, Trash2 } from 'lucide-react'

export default function InventoryManagement() {
   const [categories, setCategories] = useState([
      { id: 1, name: 'Electronics', description: 'Electronic devices and accessories' },
      { id: 2, name: 'Clothing', description: 'Apparel and fashion items' },
   ])
   const [coupons, setCoupons] = useState([
      { id: 1, code: 'SUMMER20', discount: '20%', validUntil: '2023-08-31' },
      { id: 2, code: 'WELCOME10', discount: '10%', validUntil: '2023-12-31' },
   ])
   const [genders, setGenders] = useState([
      { id: 1, name: 'Male' },
      { id: 2, name: 'Female' },
      { id: 3, name: 'Unisex' },
   ])

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>, type: string) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)
      const newItem = Object.fromEntries(formData.entries())

      switch (type) {
         case 'category':
            setCategories([...categories, { id: Date.now(), ...newItem as any }])
            break
         case 'coupon':
            setCoupons([...coupons, { id: Date.now(), ...newItem as any }])
            break
         case 'gender':
            setGenders([...genders, { id: Date.now(), ...newItem as any }])
            break
      }

      e.currentTarget.reset()
   }

   return (
      <div className="container mx-auto p-6">
         <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>

         <Tabs defaultValue="categories">
            <TabsList className="grid w-full grid-cols-3">
               <TabsTrigger value="categories">Categories</TabsTrigger>
               <TabsTrigger value="coupons">Coupons</TabsTrigger>
               <TabsTrigger value="genders">Genders</TabsTrigger>
            </TabsList>

            <TabsContent value="categories">
               <h2 className="text-2xl font-semibold mb-4">Manage Categories</h2>
               <form onSubmit={(e) => handleSubmit(e, 'category')} className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                     <div>
                        <Label htmlFor="categoryName">Category Name</Label>
                        <Input id="categoryName" name="name" placeholder="Enter category name" required />
                     </div>
                     <div>
                        <Label htmlFor="categoryDescription">Description</Label>
                        <Input id="categoryDescription" name="description" placeholder="Enter category description" required />
                     </div>
                  </div>
                  <Button type="submit">
                     <PlusCircle className="mr-2 h-4 w-4" /> Add Category
                  </Button>
               </form>
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Actions</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {categories.map((category) => (
                        <TableRow key={category.id}>
                           <TableCell>{category.name}</TableCell>
                           <TableCell>{category.description}</TableCell>
                           <TableCell>
                              <Button variant="ghost" size="icon">
                                 <Pencil className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                 <Trash2 className="h-4 w-4" />
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TabsContent>

            <TabsContent value="coupons">
               <h2 className="text-2xl font-semibold mb-4">Manage Coupons</h2>
               <form onSubmit={(e) => handleSubmit(e, 'coupon')} className="space-y-4 mb-6">
                  <div className="grid grid-cols-3 gap-4">
                     <div>
                        <Label htmlFor="couponCode">Coupon Code</Label>
                        <Input id="couponCode" name="code" placeholder="Enter coupon code" required />
                     </div>
                     <div>
                        <Label htmlFor="couponDiscount">Discount</Label>
                        <Input id="couponDiscount" name="discount" placeholder="Enter discount (e.g., 20%)" required />
                     </div>
                     <div>
                        <Label htmlFor="couponValidUntil">Valid Until</Label>
                        <Input id="couponValidUntil" name="validUntil" type="date" required />
                     </div>
                  </div>
                  <Button type="submit">
                     <PlusCircle className="mr-2 h-4 w-4" /> Add Coupon
                  </Button>
               </form>
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Code</TableHead>
                        <TableHead>Discount</TableHead>
                        <TableHead>Valid Until</TableHead>
                        <TableHead>Actions</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {coupons.map((coupon) => (
                        <TableRow key={coupon.id}>
                           <TableCell>{coupon.code}</TableCell>
                           <TableCell>{coupon.discount}</TableCell>
                           <TableCell>{coupon.validUntil}</TableCell>
                           <TableCell>
                              <Button variant="ghost" size="icon">
                                 <Pencil className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                 <Trash2 className="h-4 w-4" />
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TabsContent>

            <TabsContent value="genders">
               <h2 className="text-2xl font-semibold mb-4">Manage Genders</h2>
               <form onSubmit={(e) => handleSubmit(e, 'gender')} className="space-y-4 mb-6">
                  <div>
                     <Label htmlFor="genderName">Gender Name</Label>
                     <Input id="genderName" name="name" placeholder="Enter gender name" required />
                  </div>
                  <Button type="submit">
                     <PlusCircle className="mr-2 h-4 w-4" /> Add Gender
                  </Button>
               </form>
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Actions</TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {genders.map((gender) => (
                        <TableRow key={gender.id}>
                           <TableCell>{gender.name}</TableCell>
                           <TableCell>
                              <Button variant="ghost" size="icon">
                                 <Pencil className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon">
                                 <Trash2 className="h-4 w-4" />
                              </Button>
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </TabsContent>
         </Tabs>
      </div>
   )
}