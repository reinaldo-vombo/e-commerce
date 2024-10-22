
import React from 'react'
import ProductHeader from '../product/ProductHeader'
import ProductCarousel from '../shared/Carousel'

const ProductSection = () => {

   return (
      <section className='padding'>
         <div className="md:container space-y-7">
            <ProductHeader quey='new' title='Novos Productos' />
            <ProductCarousel />
         </div>
      </section>
   )
}

export default ProductSection
