'use client'
import { z } from "zod"
import { Input } from '@/components/ui/input'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { securityInfoSchema } from "@/lib/FormValidation"
import { toast } from "sonner"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Key } from "lucide-react"

const UpdateSecurityInfo = () => {
   function onSubmit(value: z.infer<typeof securityInfoSchema>) {
      console.log(value)
      toast.success('hhhhh')
      // Handle form submission
   }
   const form = useForm<z.infer<typeof securityInfoSchema>>({
      resolver: zodResolver(securityInfoSchema),
      defaultValues: {
         currentPassword: "",
         newPassword: "",
         confirmPassword: ""
      },
   })
   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className='space-y-5'>
               <FormField
                  control={form.control}
                  name="currentPassword"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Palavra-passe antiga</FormLabel>
                        <FormControl>
                           <Input placeholder="Palavra-passe antiga" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="newPassword"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Nova palavra-passe</FormLabel>
                        <FormControl>
                           <Input placeholder="Nova palavra-passe" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Confirmar palavra-passe</FormLabel>
                        <FormControl>
                           <Input placeholder="Confirmar palavra-passe" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type="submit" className="flex items-center gap-3">
                  <Key /> Atualizar palavra-passe
               </Button>
            </div>
         </form>
      </Form >
   )
}

export default UpdateSecurityInfo;
