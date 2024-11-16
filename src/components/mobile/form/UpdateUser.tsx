
import { userSchema } from '@/lib/FormValidation'
import { z } from "zod"
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from 'sonner'
import Image from 'next/image'
import Modal from '@/components/shared/Modal'
import { PencilIcon } from 'lucide-react'

const UpdateUser = () => {
   function onSubmit(value: z.infer<typeof userSchema>) {
      console.log(value)
      toast.success('hhhhh')
      // Handle form submission
   }
   const form = useForm<z.infer<typeof userSchema>>({
      resolver: zodResolver(userSchema),
      defaultValues: {
         name: "",
         email: "",
         photo: [],
      },
   })
   return (
      <Form {...form}>
         <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex relative">
               <Image src='/avatar.jpg' className="rounded-full m-auto" width={150} height={150} alt="redx" />
               <Modal btn={<PencilIcon width={20} />} className='absolute size-12 m-auto' title='Carregar foto'>
                  hh
               </Modal>
            </div>
            <FormField
               control={form.control}
               name="name"
               render={({ field }) => (
                  <FormItem className='w-full'>
                     <FormLabel className='text-slate-500'>Nome</FormLabel>
                     <FormControl>
                        <Input placeholder="Seu nome" {...field} />
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
                        <Input placeholder="Seu email" {...field} />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
         </form>
      </Form>
   )
}

export default UpdateUser
