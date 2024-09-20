'use client'
import { Button } from '@/components/ui/button'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { productSchema } from './FormValidation'
import ProductMedia from '../product-inventory/ProductMedia'
import { ScrollArea } from '@/components/ui/scroll-area'
import TextEditor from '../shared/TextEditor'
import Selector from '@/components/shared/Selector'
import { BRAND, CATEGORIES, GENDER } from '@/constant/site-content'
import PriceSelector from '../product-inventory/PriceSelector'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import FileUploader from '@/components/shared/FileUploader'
import Image from 'next/image'
import Modal from '@/components/shared/Modal'
import ImagePreview from '../product-inventory/ImagePreview'
import { useState } from 'react'



const CreateProduct = () => {
   const [preview, setPreview] = useState('')
   function onSubmit() {
      // Handle form submission
   }
   const form = useForm<z.infer<typeof productSchema>>({
      resolver: zodResolver(productSchema),
      defaultValues: {
         productName: "",
         description: "",
         brand: "",
         details: "",
         price: 0,
         priceDiscount: 0,
         pricePercentage: 0
      },
   })
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-4">
               <ImagePreview preview={preview} />
               <div className='col-span-8'>
                  <Tabs defaultValue="general" className="w-full">
                     <TabsList>
                        <TabsTrigger value="general">Account</TabsTrigger>
                        <TabsTrigger value="advance">Password</TabsTrigger>
                     </TabsList>
                     <TabsContent value="general">
                        <Card>
                           <CardHeader>
                              <CardTitle>Geral</CardTitle>
                              <Separator />
                           </CardHeader>
                           <CardContent className='space-y-5'>
                              <FormField
                                 control={form.control}
                                 name="productName"
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel className='text-slate-500'>Nome do produto</FormLabel>
                                       <FormControl>
                                          <Input placeholder="shadcn" {...field} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                              <div className='space-y-3'>
                                 <Label className='text-slate-500'>Descrição</Label>
                                 <TextEditor />
                              </div>
                              <div className='flex items-center gap-4'>
                                 <Selector placeholder='Categoria' options={CATEGORIES} className='w-full' />
                                 <Selector placeholder='Sexo' options={GENDER} className='w-full' />
                              </div>
                              <div>
                                 <div className="space-y-2">
                                    <Label className='text-slate-500'>Imagem</Label>
                                    <FileUploader maxFiles={1} />
                                    <div>
                                       <h2>Adicionar cores</h2>
                                       <Modal btn={<ModalButton />} title="Uplode das imagem">
                                          <FileUploader maxFiles={7} />
                                       </Modal>
                                    </div>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                        <Card className='mt-4'>
                           <CardHeader>
                              <CardTitle>Detalhes</CardTitle>
                              <Separator />
                           </CardHeader>
                           <CardContent className='space-y-5'>
                              <div className='space-y-4'>
                                 <Label className='text-slate-500'>Detalhes</Label>
                                 <TextEditor />
                              </div>
                              <div className='space-y-4'>
                                 <Selector placeholder='Marca' options={BRAND} className='w-full' />
                                 <PriceSelector />
                              </div>
                           </CardContent>
                        </Card>
                     </TabsContent>
                     <TabsContent value="advance">
                        <Card>
                           <FormField
                              control={form.control}
                              name="price"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>Price</FormLabel>
                                    <FormControl>
                                       <Input type="number" placeholder="Enter product price" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />

                           <FormField
                              control={form.control}
                              name="priceDiscount"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>Discount Price</FormLabel>
                                    <FormControl>
                                       <Input type="number" placeholder="Enter discount price" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />

                           <FormField
                              control={form.control}
                              name="pricePercentage"
                              render={({ field }) => (
                                 <FormItem>
                                    <FormLabel>Discount Percentage</FormLabel>
                                    <FormControl>
                                       <Input type="number" placeholder="Enter discount percentage" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                 </FormItem>
                              )}
                           />
                        </Card>
                     </TabsContent>
                  </Tabs>
               </div>
            </div>

            <Button type="submit">Submit</Button>
         </form>
      </Form>
   )
}
const ModalButton = () => {
   return (
      <div className="flex items-center justify-between rounded-md shadow-md p-3 text-black w-full">
         <Image src='/shoe-icon.png' width={30} height={30} alt="shoe icon" />
         <p>Images de previsualização</p>
      </div>
   )
}
export default CreateProduct
