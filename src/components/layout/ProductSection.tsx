
import React from 'react'
import ProductHeader from '../product/ProductHeader'
import ProductCarousel from '../shared/Carousel'

const ProductSection = () => {
   return (
      <section className='padding'>
         <div className="container space-y-7">
            <ProductHeader />
            <ProductCarousel />
         </div>
      </section>
   )
}

export default ProductSection
