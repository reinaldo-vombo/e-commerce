import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Icons } from '@/constant/icons'
import { Logo } from '@/constant/svgIcons'
import Link from 'next/link'
import React from 'react'

const Lognin = () => {
   return (
      <div className='space-y-8 mt-16'>
         <div className='flex items-center justify-center'>
            <Logo width={80} height={80} />
         </div>
         <div className='text-center space-y-5'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas praesentium,</p>
         </div>
         <form className='space-y-5'>
            <div className='relative'>
               <Input placeholder='email' />
               <Icons.envelope className='absolute right-[22px] top-[9px] text-slate-300' width={20} />
            </div>
            <div className='relative'>
               <Input placeholder='password' />
               <Icons.eye className='absolute right-[22px] top-[9px] text-slate-300' width={20} />
            </div>
            <div className='flex items-center justify-between'>
               <div className='flex items-center gap-2'>
                  <input type="checkbox" name="" id="" />
                  <span>Lembra-me</span>
               </div>
               <Link href='/auth/forgot-password' className='text-xs text-alpha'>Esqueceu a palvra-passe?</Link>
            </div>
            <Button className='w-full rounded-xl bg-alpha'>Entar</Button>
         </form>
         <Separator />
         <div className='flex items-center justify-center gap-2 text-xs'>
            <span>Não ten uma conta?</span>
            <Link href='/auth/register' className='text-alpha font-semibold'>Cadastra-se</Link>
         </div>
      </div>
   )
}

export default Lognin
