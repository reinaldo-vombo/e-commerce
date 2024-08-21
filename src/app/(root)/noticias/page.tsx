import { Input } from '@/components/ui/input'
import { Icons } from '@/constant/icons'
import Image from 'next/image'
import React from 'react'

export default function page() {
   return (
      <section className='bg-black'>
         <div className='pt-[100px] space-y-6'>
            <div className="container">
               <div className='mb-8'>
                  <h1 className='h1-bold text-center text-white tracking-tighter'>REDX.INC <br />SALA DE NOTÍCIAS</h1>
               </div>
               <div className='bg-slate-600 rounded-full p-2 flex items-center justify-between'>
                  <div></div>
                  <div className='relative'>
                     <Input className='border-none bg-transparent text-white' placeholder='Pesquisar' />
                     <Icons.search className='absolute top-3 right-0 text-slate-600' width={20} />
                  </div>
               </div>
            </div>
            <div className='bg-white pt-14 rounded-2xl'>
               <div className="container">
                  <div className="grid grid-cols-12 gap-4">
                     {Array.from({ length: 5 }).map((_, i) => (
                        <div className='col-span-3 p-4 space-y-3' key={i}>
                           <div className='relative w-full h-56'>
                              <Image src={'/blog.jpg'} className='object-cover rounded-lg' fill alt='image' />
                           </div>
                           <div>
                              <span className='text-slate-400'>hello</span>
                              <h2 className='font-semibold text-xl'>The best ecommerce ever </h2>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
