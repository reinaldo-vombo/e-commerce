import { LayoutProp } from '@/types'
import React from 'react'

export default function AuthLayout({ children }: LayoutProp) {
   return (
      <section>
         {children}
      </section>
   )
}
