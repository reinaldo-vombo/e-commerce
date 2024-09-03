
import ListItem from '@/components/cart/ListItem'
import PaymentSidebar from '@/components/cart/PaymentSidebar'
import Breadcrumbe from '@/components/shared/Breadcrumbe'
import { PRODUCTS } from '@/constant/site-content'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function page() {
   const getTotalPrice = () => {
      return PRODUCTS.reduce((total, product) => total + product.price, 0);
   };
   return (
      <section>
         <Breadcrumbe title='Carrinho' />
         <div className="padding">
            <div className="container mt-16">
               <div className='grid grid-cols-12 gap-4 mx-20'>
                  <div className="col-span-12">
                     <h2 className='h3-bold'>Seu carrinho de compras</h2>
                     <ListItem />
                     <div className='flex items-center justify-between mt-8 pr-9'>
                        <Link href='/' className='flex items-center gap-4'>
                           <ArrowLeftIcon width={20} />
                           <span className='base-semibold'>Voltar a loja</span>
                        </Link>
                        <div className='flex items-center gap-11'>
                           <span>SubTotal:</span>
                           <h3 className='base-semibold'>{getTotalPrice()}(kz)</h3>
                        </div>
                        <PaymentSidebar />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
