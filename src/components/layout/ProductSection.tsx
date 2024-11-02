
import React from 'react'
import ProductHeader from '../product/ProductHeader'
import ProductCarousel from '../shared/Carousel'
import MobileCarousel from '../mobile/MobileCarousel'

const ProductSection = () => {

   return (
      <section className='padding'>
         <div className="container space-y-7">
            <ProductHeader quey='new' title='Novos Productos' />
            <div className='hidden md:block'>
               <ProductCarousel />
            </div>
            <div className='md:hidden'>
               <MobileCarousel />
            </div>
         </div>
      </section>
   )
}

export default ProductSection
