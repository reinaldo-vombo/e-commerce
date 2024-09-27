import Breadcrumbe from '@/components/dashboard/Breadcrumbe'
import OverViewCards from '@/components/dashboard/overview/OverViewCards'
import ProductTable from '@/components/dashboard/tables/products'
import Link from 'next/link'

export default function page() {
   return (
      <section className='space-y-5'>
         <Breadcrumbe title='Produtos'
            actionButton={
               <Link
                  className='bg-black p-4 rounded-lg text-white shadow-md transition-colors hover:bg-white hover:text-black'
                  href={'/dashboard/product/create-product'}>Criar producto</Link>
            } />
         <div className='space-y-7'>
            <OverViewCards />
            <ProductTable />
         </div>
      </section>
   )
}
