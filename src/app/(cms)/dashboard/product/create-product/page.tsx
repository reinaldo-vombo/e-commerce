import CreateProduct from '@/components/dashboard/forms/CreateProduct'
import React from 'react'

export default function page() {
   return (
      <section>
         <div className='text-left'>
            <h2>Adicionar Novo Producto</h2>
            <p>You can see all seles analysis results more clearly and completely</p>
         </div>
         <CreateProduct />
      </section>
   )
}
