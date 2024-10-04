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
import { signinSchema } from '@/lib/FormValidation'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { TFormView } from '@/types'


const Register = ({ view }: TFormView) => {
   function onSubmit(value: z.infer<typeof signinSchema>) {
      console.log(value)
      toast.success('hhhhh')
      // Handle form submission
   }
   const form = useForm<z.infer<typeof signinSchema>>({
      resolver: zodResolver(signinSchema),
      defaultValues: {
         name: "",
         email: "",
         password: "",
         confirmPassword: ""
      }
   })
   return (
      <div className='space-y-8'>
         <Form {...form}>
            <form className='space-y-5' onSubmit={form.handleSubmit(onSubmit)}>
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem className='w-full'>
                        <FormLabel className='text-slate-500'>Nome</FormLabel>
                        <FormControl>
                           <div className='relative'>
                              <Input placeholder='Nome' {...field} />
                              <Icons.envelope className='absolute right-[22px] top-[9px] text-slate-300' width={20} />
                           </div>
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
                              <Input type='password' placeholder='Palavra-passe' {...field} />
                              <Icons.eye className='absolute right-[22px] top-[9px] text-slate-300' width={20} />
                           </div>
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
                        <FormLabel className='text-slate-500'>Confirmar Palavra-passe</FormLabel>
                        <FormControl>
                           <div className='relative'>
                              <Input type='password' placeholder='confirmar' {...field} />
                              <Icons.eye className='absolute right-[22px] top-[9px] text-slate-300' width={20} />
                           </div>
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <Button type='submit' className='w-full rounded-xl bg-alpha'>Entar</Button>
            </form>
         </Form>
         <Separator />
         <div className='flex items-center justify-center gap-2 text-xs'>
            <span>Já tenho uma conta</span>
            <b onClick={() => view('login')} className='text-alpha cursor-pointer'>Entrar</b>
         </div>
      </div>
   )
}

export default Register
