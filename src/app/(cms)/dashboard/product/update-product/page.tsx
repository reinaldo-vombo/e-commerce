import UpdateProduct from '@/components/dashboard/forms/UpdateProduct'
import { MoveLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function UpdateProductPage() {
   return (
      <section>
         <div className='text-left mb-8'>
            <h2 className='h2-bold'>Atualizar Producto</h2>
            <p>You can see all seles analysis results more clearly and completely</p>
            <div className='w-fit'>
               <Link href='/dashboard/product/' aria-label='move left arrow icon'><MoveLeft /></Link>
            </div>
         </div>
         <UpdateProduct />
      </section>
   )
}
