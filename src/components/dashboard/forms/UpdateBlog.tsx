'use client'
import { z } from "zod"
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { blogSchema } from "@/lib/FormValidation"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import FileUploader from "@/components/shared/FileUploader"
import { Button } from "@/components/ui/button"
import TextEditor from "../shared/TextEditor"
import { STATUS } from "@/constant/site-content"
import Selector from "../shared/Selector"
import { ScrollArea } from "@/components/ui/scroll-area"

const UpdateBlog = () => {
   function onSubmit(value: z.infer<typeof blogSchema>) {
      console.log(value)
      toast.success('hhhhh')
      // Handle form submission
   }
   const form = useForm<z.infer<typeof blogSchema>>({
      resolver: zodResolver(blogSchema),
      defaultValues: {
         title: "",
         thumbNail: [],
         description: "",
         status: "Publicado",
         userId: "1111111"
      },
   })
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-6">
               <ScrollArea className='h-[700px]'>
                  <FormField
                     control={form.control}
                     name="thumbNail"
                     render={({ field }) => (
                        <FormItem className='w-full'>
                           <FormLabel className='text-slate-500'>Thumbnail</FormLabel>
                           <FormControl>
                              <FileUploader maxFiles={1} formField={field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="title"
                     render={({ field }) => (
                        <FormItem className='w-full'>
                           <FormLabel className='text-slate-500'>Titulo</FormLabel>
                           <FormControl>
                              <Input placeholder="Titulo" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="description"
                     render={({ field }) => (
                        <FormItem className='w-full'>
                           <FormLabel className='text-slate-500'>Descrição</FormLabel>
                           <FormControl>
                              <TextEditor formField={field} heigh={150} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="status"
                     render={({ field }) => (
                        <FormItem className='w-full'>
                           <FormLabel className='text-slate-500'>Estado</FormLabel>
                           <FormControl>
                              <Selector placeholder='Estado' options={STATUS} formField={field} className='w-full' />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
                  <FormField
                     control={form.control}
                     name="userId"
                     render={({ field }) => (
                        <FormItem className='w-full'>
                           <FormControl>
                              <Input placeholder="shadcn" type="hidden" {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <Button type="submit" className="w-full">
                     Publicar
                  </Button>
               </ScrollArea>
            </div>
         </form>
      </Form >
   )
}

export default UpdateBlog;
