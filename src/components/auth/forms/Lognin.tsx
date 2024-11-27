'use client'
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Icons } from '@/constant/icons'
import { logninSchema } from '@/lib/FormValidation'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { TFormView } from '@/types'
import { signIn } from "next-auth/react";
import { redirect } from 'next/navigation'

const Lognin = ({ view }: TFormView) => {

   async function onSubmit(value: z.infer<typeof logninSchema>) {
      const email = value.email
      const password = value.password
      try {
         const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
         });

         if (result?.error) {
            toast.warning("Email ou Senha incorreta");
            console.error(result.error);
         } else {
            toast.success("Bem-vindo ao portal");
            redirect('/dashboard')
         }
      } catch (error) {
         console.error(error);
         toast.error("Ocorreu um erro ao fazer login.");
      }
   }
   const form = useForm<z.infer<typeof logninSchema>>({
      resolver: zodResolver(logninSchema),
      defaultValues: {
         email: '',
         password: '',
      }
   })
   return (
      <div className='space-y-8 mt-16'>
         <Form {...form}>
            <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Email</FormLabel>
                        <FormControl>
                           <div className='relative'>
                              <Input placeholder='email' {...field} />
                              <Icons.envelope className='absolute right-[22px] top-[9px] text-slate-300' width={20} />
                           </div>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Palavra-passe</FormLabel>
                        <FormControl>
                           <div className='relative'>
                              <Input placeholder='email' {...field} />
                              <Icons.eye className='absolute right-[22px] top-[9px] text-slate-300' width={20} />
                           </div>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                     <input type="checkbox" name="" id="" />
                     <span>Lembra-me</span>
                  </div>
                  <span onClick={() => view('recover')} className='text-xs cursor-pointer text-alpha'>Esqueceu a palvra-passe?</span>
               </div>
               <Button className='w-full rounded-xl bg-alpha'>Entar</Button>
            </form>
         </Form>
         <Separator />
         <div className='flex items-center justify-center gap-2 text-xs'>
            <span>Não ten uma conta?</span>
            <b onClick={() => view('register')} className='text-alpha cursor-pointer'>Cadastra-se</b>
         </div>
      </div>
   )
}

export default Lognin
