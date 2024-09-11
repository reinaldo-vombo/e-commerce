import { Icons } from '@/constant/icons'
import { LogoWite } from '@/constant/svgIcons'
import Link from 'next/link'
import React from 'react'

const InfoNav = () => {
   return (
      <nav className='text-white bg-black'>
         <div className="container">
            <div className='flex items-center justify-between'>
               <Link href='/'>
                  <LogoWite width={60} height={60} />
               </Link>
               <div>
                  <Icons.phone fill='#fff' width={20} />
               </div>
            </div>
         </div>
      </nav>
   )
}

export default InfoNav
