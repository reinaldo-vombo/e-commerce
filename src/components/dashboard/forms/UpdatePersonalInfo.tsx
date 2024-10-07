
import { z } from "zod"
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { personalInfoSchema } from "@/lib/FormValidation"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Image from "next/image"
import Modal from "@/components/shared/Modal"
import FileUploader from "@/components/shared/FileUploader"
import { Camera, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const UpdatePersonalInfo = () => {
   function onSubmit(value: z.infer<typeof personalInfoSchema>) {
      console.log(value)
      toast.success('hhhhh')
      // Handle form submission
   }
   const form = useForm<z.infer<typeof personalInfoSchema>>({
      resolver: zodResolver(personalInfoSchema),
      defaultValues: {
         name: "",
         avatar: "",
         address: "",
         email: "",
         phone: 0
      },
   })
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
               <div className="flex items-center space-x-4">
                  <Image src={'/avatar.jpg'} className="w-20 h-20 rounded-full" width={80} height={80} alt="Admin Avatar" />
                  <Modal btn={<Camera className="mr-2 h-4 w-4" />} title="Carregar imagem">
                     <FormField
                        control={form.control}
                        name="avatar"
                        render={({ field }) => (
                           <FormItem className='w-full'>
                              <FormControl>
                                 <FileUploader maxFiles={1} formField={field} />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                  </Modal>
               </div>
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Nome</FormLabel>
                        <FormControl>
                           <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Email</FormLabel>
                        <FormControl>
                           <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Endereço</FormLabel>
                        <FormControl>
                           <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Telefone</FormLabel>
                        <FormControl>
                           <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit" className="flex items-center gap-3">
                  <User /> Atualizar informações
               </Button>
            </div>
         </form>
      </Form >
   )
}

export default UpdatePersonalInfo
