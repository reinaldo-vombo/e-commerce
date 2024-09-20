import Breadcrumbe from '@/components/dashboard/Breadcrumbe'
import OverViewCards from '@/components/dashboard/overview/OverViewCards'
import Link from 'next/link'
import React from 'react'

export default function page() {
   return (
      <section className='space-y-5'>
         <Breadcrumbe title='Produtos'
            actionButton={
               <Link
                  className='bg-black p-4 rounded-lg text-white shadow-md transition-colors hover:bg-white hover:text-black'
                  href={'/dashboard/product/create-product'}>Criar producto</Link>
            } />
         <OverViewCards />
         products
      </section>
   )
}
