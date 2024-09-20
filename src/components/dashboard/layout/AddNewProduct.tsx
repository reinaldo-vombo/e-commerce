"use client"

import { useState } from "react"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { X } from "lucide-react"
import CreateProduct from "../forms/CreateProduct"

type FormData = {
   name: string
   description: string
   details: string
   price: number
   discountPrice: number
   discountPercentage: number
   image: string
   categories: { value: string }[]
   status: string
}

export default function AddNewProduct() {
   return (
      <div className="h-screen">
         <Card className="w-full">
            <CardHeader>
               <CardTitle className="text-2xl font-bold">Add New Product</CardTitle>
            </CardHeader>
            <CardContent>
               <CreateProduct />
            </CardContent>
         </Card>
      </div>
   )
}