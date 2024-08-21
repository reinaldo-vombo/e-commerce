import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Icons } from "@/constant/icons"
import { LogoWite } from "@/constant/svgIcons"
import Link from "next/link"


const ForgotPasswor = () => {
   return (
      <section className='space-y-8 w-96 mt-16 text-white relative z-30'>
         <div className="flex items-center justify-center">
            <LogoWite width={50} height={50} />
         </div>
         <div className='text-center space-y-5'>
            <h2>Recupera palavra-passe</h2>
         </div>
         <form className='space-y-5'>
            <div className="relative">
               <Input placeholder='email' />
               <Icons.envelope className="absolute top-3 right-3 text-slate-300" width={20} />
            </div>
            <div className='flex items-center justify-center'>
               <Link href='/auth/lognin' className='text-xs'>Já tem uma conta</Link>
            </div>
            <Button className='w-full rounded-xl'>Enviar</Button>
         </form>
      </section>
   )
}

export default ForgotPasswor
