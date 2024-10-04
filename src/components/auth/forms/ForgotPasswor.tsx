import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form'
import { recoverPasswordSchema } from '@/lib/FormValidation'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Separator } from '@/components/ui/separator'
import { TFormView } from '@/types'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/constant/icons"


const ForgotPasswor = ({ view }: TFormView) => {
   function onSubmit(value: z.infer<typeof recoverPasswordSchema>) {
      console.log(value)
      toast.success('hhhhh')
      // Handle form submission
   }
   const form = useForm<z.infer<typeof recoverPasswordSchema>>({
      resolver: zodResolver(recoverPasswordSchema),
      defaultValues: {
         email: "",
      }
   })
   return (
      <div className='space-y-8'>
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
               <Button type='submit' className='w-full rounded-xl bg-alpha'>Entar</Button>
            </form>
         </Form>
         <Separator />
         <div className='flex items-center justify-center gap-2 text-xs'>
            <span>Já tem uma conta?</span>
            <b onClick={() => view('login')} className='text-alpha cursor-pointer'>Entart</b>
         </div>
      </div>
   )
}

export default ForgotPasswor
