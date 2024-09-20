import CreateProduct from '@/components/dashboard/forms/CreateProduct'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

export default function page() {
   return (
      <section>
         <div className='text-left'>
            <h2>Adicionar Novo Producto</h2>
            <p>You can see all seles analysis results more clearly and completely</p>
         </div>
         <CreateProduct />
         {/* <Card className="w-full">
            <CardHeader>
               <CardTitle className="h3-bolde">Add New Product</CardTitle>
               
            </CardHeader>
            <CardContent>
               
            </CardContent>
         </Card> */}
      </section>
   )
}
