import Particles from '@/components/shared/Particules'
import { LayoutProp } from '@/types'
import React from 'react'

export default function AuthLayout({ children }: LayoutProp) {
   return (
      <section className="h-screen overflow-hidden relative bg-black">
         <Particles
            className='absolute inset-0'
            ease={80}
            refresh
         />
         <div className="flex justify-center h-full">
            {children}
         </div>
         <div className="ocean">
            <div className="wave"></div>
            <div className="wave wave2"></div>
         </div>
      </section>
   )
}
