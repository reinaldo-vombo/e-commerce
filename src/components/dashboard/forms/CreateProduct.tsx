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
import { useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { productSchema } from './FormValidation'
import TextEditor from '../shared/TextEditor'
import { BRAND, CATEGORIES, COLORES, GENDER, PRODUCT_TYPE, SIZES } from '@/constant/site-content'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import FileUploader from '@/components/shared/FileUploader'
import Modal from '@/components/shared/Modal'
import ImagePreview from '../product-inventory/ImagePreview'
import { useState, } from 'react'
import AddColoresModal from '../product-inventory/AddColores'
import { Checkbox } from '@/components/ui/checkbox'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import SizeTabel from '@/components/shared/SizeTabel'
import Selector from '../shared/Selector'
import { toast } from 'sonner'
import { Toggle } from '@/components/ui/toggle'

const CreateProduct = () => {
   const [colorPreview, setColerPreview] = useState<(File & { preview: string })[]>([])
   const [enableCupon, setEnableCupon] = useState(false)
   function onSubmit(value: z.infer<typeof productSchema>) {
      console.log(value)
      toast.success('hhhhh')
      // Handle form submission
   }
   const form = useForm<z.infer<typeof productSchema>>({
      resolver: zodResolver(productSchema),
      defaultValues: {
         name: "",
         description: "",
         details: "",
         brand: "",
         category: "",
         gender: "",
         image: [],
         colors: [{ color: '', images: [] }],
         type: "",
         sizes: [],
         price: 0,
         priceDiscount: 0,
         pricePercentage: 0
      },
   })
   const { control, handleSubmit } = form;
   const { fields, append, remove } = useFieldArray({
      control,
      name: 'colors',
   })
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-12 gap-4 relative">
               <ImagePreview />
               <div className='col-span-8'>
                  <Tabs defaultValue="general" className="w-full">
                     <TabsList>
                        <TabsTrigger value="general">Geral</TabsTrigger>
                        <TabsTrigger value="advance">Avançado</TabsTrigger>
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
                                 name="name"
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
                                 <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                       <FormItem>
                                          <FormLabel className='text-slate-500'>Descriçao</FormLabel>
                                          <FormControl>
                                             <TextEditor formField={field} />
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />
                              </div>
                              <div className='flex items-center gap-4'>
                                 <FormField
                                    control={form.control}
                                    name="category"
                                    render={({ field }) => (
                                       <FormItem className='w-full'>
                                          <FormLabel className='text-slate-500'>Categoria</FormLabel>
                                          <FormControl>
                                             <Selector placeholder='Categoria' options={CATEGORIES} formField={field} className='w-full' />
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />
                                 <FormField
                                    control={form.control}
                                    name="gender"
                                    render={({ field }) => (
                                       <FormItem className='w-full'>
                                          <FormLabel className='text-slate-500'>Categoria</FormLabel>
                                          <FormControl>
                                             <Selector placeholder='Sexo' options={GENDER} formField={field} className='w-full' />
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />
                              </div>
                              <div>
                                 <div className="space-y-2">
                                    <FormField
                                       control={form.control}
                                       name="image"
                                       render={({ field }) => (
                                          <FormItem className='w-full'>
                                             <FormLabel className='text-slate-500'>Imagem</FormLabel>
                                             <FormControl>
                                                <FileUploader formField={field} maxFiles={1} />
                                             </FormControl>
                                             <FormMessage />
                                          </FormItem>
                                       )}
                                    />

                                    <div className="space-y-2 grid">
                                       <Label className='text-slate-500'>Cores</Label>
                                       <div className='flex items-center justify-center gap-3'>
                                          <AddColoresModal previews={colorPreview} />
                                          <Modal
                                             btn={<ModalButton />}
                                             title="Cores do producto">
                                             {fields.map((color, index) => (
                                                <div className='space-y-5' key={color.id}>
                                                   <FormField
                                                      control={control}
                                                      name={`colors.${index}.color`}
                                                      render={({ field }) => (
                                                         <FormItem className="w-full">
                                                            <FormLabel className="text-slate-500">Cor</FormLabel>
                                                            <FormControl>
                                                               <div className="flex space-x-2">
                                                                  {COLORES.map(({ id, name, value }) => (
                                                                     <button
                                                                        key={id}
                                                                        type="button"
                                                                        onClick={() => field.onChange(value)} // Update the form value on click
                                                                        className={`w-8 h-8 rounded-full border-2 border-gray-300 ${field.value === value ? 'ring-2 ring-blue-500' : ''
                                                                           }`}
                                                                        style={{ backgroundColor: value }}
                                                                        aria-label={name} // For accessibility
                                                                     />
                                                                  ))}
                                                               </div>
                                                            </FormControl>
                                                         </FormItem>
                                                      )}
                                                   />
                                                   <FormField
                                                      control={control}
                                                      name={`colors.${index}.images`}
                                                      render={({ field }) => (
                                                         <FormItem className="w-full">
                                                            <FormLabel className="text-slate-500">Imagens</FormLabel>
                                                            <FormControl>
                                                               <FileUploader formField={field} maxFiles={5} />
                                                            </FormControl>
                                                            <FormMessage />
                                                         </FormItem>
                                                      )}
                                                   />
                                                   <div className='flex items-center justify-center'>
                                                      <Button type="button" className='bg-red-500 transition-colors hover:bg-red-600' onClick={() => remove(index)}>
                                                         Remove Cor
                                                      </Button>
                                                   </div>
                                                </div>
                                             ))}
                                             <Button
                                                type="button"
                                                className='bg-green-500 transition-colors hover:bg-green-600 w-full'
                                                onClick={() => append({ color: '', images: undefined })} // Append a new color field
                                             >
                                                Adicionar Cor
                                             </Button>
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
                                 <FormField
                                    control={form.control}
                                    name="details"
                                    render={({ field }) => (
                                       <FormItem>
                                          <FormLabel className='text-slate-500'>Detalhes do producto</FormLabel>
                                          <FormControl>
                                             <TextEditor formField={field} />
                                          </FormControl>
                                          <FormMessage />
                                       </FormItem>
                                    )}
                                 />
                              </div>
                              <div className='space-y-4'>
                                 <div className='flex gap-4'>
                                    <FormField
                                       control={form.control}
                                       name="brand"
                                       render={({ field }) => (
                                          <FormItem className='w-full'>
                                             <FormLabel className='text-slate-500'>Marca</FormLabel>
                                             <FormControl>
                                                <Selector placeholder='Categoria' options={BRAND} formField={field} className='w-full' />
                                             </FormControl>
                                             <FormMessage />
                                          </FormItem>
                                       )}
                                    />
                                    <FormField
                                       control={form.control}
                                       name="type"
                                       render={({ field }) => (
                                          <FormItem className='w-full'>
                                             <FormLabel className='text-slate-500'>Tipo de producto</FormLabel>
                                             <FormControl>
                                                <Selector placeholder='producto' options={PRODUCT_TYPE} formField={field} className='w-full' />
                                             </FormControl>
                                             <FormMessage />
                                          </FormItem>
                                       )}
                                    />
                                 </div>
                                 <div className='flex justify-center'>
                                    {/* <FormField
                                       control={form.control}
                                       name="sizes"
                                       render={({ field }) => (
                                          <FormItem className='w-full'>
                                             <FormLabel className='text-slate-500'>Tipo de producto</FormLabel>
                                             <FormControl>
                                                {SIZES.map((size) => (
                                                   <button
                                                      key={size}
                                                      type="button"
                                                      onClick={() => {
                                                         const currentSizes = field.value || []; // Use the value from field
                                                         if (currentSizes.includes(size)) {
                                                            // Remove size if already selected
                                                            field.onChange(currentSizes.filter(s => s !== size));
                                                         } else {
                                                            // Add size if not already selected
                                                            field.onChange([...currentSizes, size]);
                                                         }
                                                      }}
                                                      className={`${form.getValues('sizes')?.includes(size) ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                                                   >
                                                      {size}
                                                   </button>
                                                ))}
                                             </FormControl>
                                             <FormMessage />
                                          </FormItem>
                                       )}
                                    /> */}
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
                                 {/* <Selector placeholder='Codigo do pupão' options={GENDER} className={`w-full ${enableCupon ? 'cursor-pointer' : 'cursor-not-allowed'}`} /> */}
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
            <Button type='submit'>Cadastrar</Button>
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
