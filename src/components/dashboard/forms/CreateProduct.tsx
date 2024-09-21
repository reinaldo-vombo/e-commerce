'use client'
import { Button } from '@/components/ui/button'
import {
   Form,
   FormControl,
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
import TextEditor from '../shared/TextEditor'
import Selector from '@/components/shared/Selector'
import { BRAND, CATEGORIES, COLORES, GENDER, SIZES } from '@/constant/site-content'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import FileUploader from '@/components/shared/FileUploader'
import Modal from '@/components/shared/Modal'
import ImagePreview from '../product-inventory/ImagePreview'
import { useState } from 'react'
import AddColoresModal from '../product-inventory/AddColores'
import { Checkbox } from '@/components/ui/checkbox'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import SizeTabel from '@/components/shared/SizeTabel'

const CreateProduct = () => {
   const [preview, setPreview] = useState<(File & { preview: string })[]>([])
   const [colorPreview, setColerPreview] = useState<(File & { preview: string })[]>([])
   const [enableCupon, setEnableCupon] = useState(false)
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
            <div className="grid grid-cols-12 gap-4 relative">
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
                                 <Selector placeholder='Categoria' name='category' options={CATEGORIES} className='w-full' />
                                 <Selector placeholder='Sexo' name='gender' options={GENDER} className='w-full' />
                              </div>
                              <div>
                                 <div className="space-y-2">
                                    <Label className='text-slate-500'>Imagem</Label>
                                    <FileUploader maxFiles={1} setPreview={setPreview} />
                                    <div className="space-y-2 grid">
                                       <Label className='text-slate-500'>Cores</Label>
                                       <div className='flex items-center justify-center gap-3'>
                                          <AddColoresModal previews={colorPreview} />
                                          <Modal
                                             btn={<ModalButton />}
                                             title="Cores do producto">
                                             <Selector placeholder='Sexo' name='colore' options={COLORES} className='w-full' />
                                             <Separator />
                                             <FileUploader maxFiles={7} setPreview={setColerPreview} />
                                          </Modal>

                                       </div>
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
                                 <div className='flex gap-4'>
                                    <Selector placeholder='Marca' options={BRAND} className='w-full' />
                                    <Selector placeholder='Tipo de producto' options={BRAND} className='w-full' />
                                 </div>
                                 <div className='flex justify-center'>
                                    <div className='w-1/2'>
                                       <SizeTabel productSize={SIZES} />
                                    </div>
                                 </div>
                              </div>
                           </CardContent>
                        </Card>
                     </TabsContent>
                     <TabsContent value="advance">
                        <Card>
                           <CardHeader>
                              <CardTitle>Detalhes</CardTitle>
                              <Separator />
                           </CardHeader>
                           <CardContent className='space-y-5'>

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
                              <div className='flex items-center justify-between'>
                                 <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" checked={enableCupon}
                                       onClick={() => setEnableCupon((prev) => !prev)} />
                                    <label
                                       htmlFor="terms"
                                       className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                       Adicionar cupão de desconto
                                    </label>
                                 </div>
                                 <Selector placeholder='Codigo do pupão' name='cupun' options={GENDER} disabled={!enableCupon} className={`w-full ${enableCupon ? 'cursor-pointer' : 'cursor-not-allowed'}`} />
                              </div>
                              <FormField
                                 control={form.control}
                                 name="priceDiscount"
                                 render={({ field }) => (
                                    <FormItem>
                                       <FormLabel>Discount Price</FormLabel>
                                       <FormControl>
                                          <Input type="number" disabled={!enableCupon} placeholder="Enter discount price" {...field} />
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
                                          <Input type="number" disabled={!enableCupon} placeholder="Enter discount percentage" {...field} />
                                       </FormControl>
                                       <FormMessage />
                                    </FormItem>
                                 )}
                              />
                              <Button type='submit'>Cadastrar</Button>
                           </CardContent>
                        </Card>
                     </TabsContent>
                  </Tabs>
               </div>
            </div>
         </form>
      </Form>
   )
}
const ModalButton = () => {
   return (
      <div className='relative rounded-xl p-2 w-28 '>
         <Image src='/shoe-icon.png' width={80} height={80} alt='shoe image' />
         <div className='absolute bg-[#0000006e] rounded-xl flex items-center justify-center text-white inset-0'>
            <Plus width={50} />
         </div>
      </div>
   )
}

export default CreateProduct
