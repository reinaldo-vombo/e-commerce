"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface Coupon {
   id: string
   code: string
   discount: number
   isPercentage: boolean
   isActive: boolean
}

export default function CouponManagement() {
   const [coupons, setCoupons] = useState<Coupon[]>([
      { id: "1", code: "SUMMER10", discount: 10, isPercentage: true, isActive: true },
      { id: "2", code: "WELCOME20", discount: 20, isPercentage: true, isActive: true },
      { id: "3", code: "FLAT50", discount: 50, isPercentage: false, isActive: false },
   ])
   const [newCoupon, setNewCoupon] = useState<Omit<Coupon, "id">>({
      code: "",
      discount: 0,
      isPercentage: true,
      isActive: true,
   })
   const [isDialogOpen, setIsDialogOpen] = useState(false)

   const handleAddCoupon = () => {
      setCoupons([...coupons, { ...newCoupon, id: Date.now().toString() }])
      setNewCoupon({ code: "", discount: 0, isPercentage: true, isActive: true })
      setIsDialogOpen(false)
   }

   const handleDeleteCoupon = (id: string) => {
      setCoupons(coupons.filter((coupon) => coupon.id !== id))
   }

   const handleToggleActive = (id: string) => {
      setCoupons(
         coupons.map((coupon) =>
            coupon.id === id ? { ...coupon, isActive: !coupon.isActive } : coupon
         )
      )
   }

   return (
      <div className="container mx-auto py-10">
         <h1 className="text-2xl font-bold mb-5">Coupon Management</h1>
         <div className="mb-4">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
               <DialogTrigger asChild>
                  <Button>
                     <Plus className="mr-2 h-4 w-4" /> Add New Coupon
                  </Button>
               </DialogTrigger>
               <DialogContent>
                  <DialogHeader>
                     <DialogTitle>Add New Coupon</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="code" className="text-right">
                           Code
                        </Label>
                        <Input
                           id="code"
                           value={newCoupon.code}
                           onChange={(e) => setNewCoupon({ ...newCoupon, code: e.target.value })}
                           className="col-span-3"
                        />
                     </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="discount" className="text-right">
                           Discount
                        </Label>
                        <Input
                           id="discount"
                           type="number"
                           value={newCoupon.discount}
                           onChange={(e) => setNewCoupon({ ...newCoupon, discount: Number(e.target.value) })}
                           className="col-span-3"
                        />
                     </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="isPercentage" className="text-right">
                           Is Percentage
                        </Label>
                        <Switch
                           id="isPercentage"
                           checked={newCoupon.isPercentage}
                           onCheckedChange={(checked) => setNewCoupon({ ...newCoupon, isPercentage: checked })}
                        />
                     </div>
                     <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="isActive" className="text-right">
                           Is Active
                        </Label>
                        <Switch
                           id="isActive"
                           checked={newCoupon.isActive}
                           onCheckedChange={(checked) => setNewCoupon({ ...newCoupon, isActive: checked })}
                        />
                     </div>
                  </div>
                  <Button onClick={handleAddCoupon}>Add Coupon</Button>
               </DialogContent>
            </Dialog>
         </div>
         <Table>
            <TableHeader>
               <TableRow>
                  <TableHead>Code</TableHead>
                  <TableHead>Discount</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
               </TableRow>
            </TableHeader>
            <TableBody>
               {coupons.map((coupon) => (
                  <TableRow key={coupon.id}>
                     <TableCell>{coupon.code}</TableCell>
                     <TableCell>
                        {coupon.discount}
                        {coupon.isPercentage ? "%" : ""}
                     </TableCell>
                     <TableCell>{coupon.isPercentage ? "Percentage" : "Fixed"}</TableCell>
                     <TableCell>
                        <Switch
                           checked={coupon.isActive}
                           onCheckedChange={() => handleToggleActive(coupon.id)}
                        />
                     </TableCell>
                     <TableCell>
                        <Button variant="destructive" onClick={() => handleDeleteCoupon(coupon.id)}>
                           Delete
                        </Button>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </div>
   )
}