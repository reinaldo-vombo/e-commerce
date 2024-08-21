import { Logo, LogoWite } from '@/constant/svgIcons'
import React from 'react'
import Selector from '../shared/Selector'
import { LANGUAGES } from '@/constant/site-content'
import Link from 'next/link'

const LINKS = ['Historias', 'Impacto', 'Empresa']
const BlogNav = () => {
   return (
      <nav className='container text-white'>
         <div className='flex items-center justify-between'>
            <Link href='/'>
               <LogoWite width={50} height={50} />
            </Link>
            <div className='flex items-center gap-6'>
               <ul className='flex items-center gap-2 font-semibold'>
                  {LINKS.map((item, i) => (
                     <li key={i}>{item}</li>
                  ))}
               </ul>
               <div>
                  <Selector options={LANGUAGES} placeholder='Linguagem' className='w-28 border-none bg-black' />
               </div>
            </div>
         </div>
      </nav>
   )
}

export default BlogNav
