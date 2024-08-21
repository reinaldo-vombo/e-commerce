'use client'
import Breadcrumbe from '../shared/Breadcrumbe'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { PRODUCTS } from '@/constant/site-content'
import Product from '../product/Product'
import FilterProducts from '../product/Filter'
import ProductCatalogo from '../shared/ProductCatalogo'

const ProductsScreen = () => {
   const [showFilters, setShowFilters] = useState(true)
   return (
      <section className='relative overflow-hidden isolate'>
         <Breadcrumbe coverImage='/cover1.webp' title='Men&#39;s Shoes' />
         <div className="padding">
            <div className="container space-y-7">
               <ProductCatalogo setShowFilters={setShowFilters} />
               <div className="flex gap-4">
                  <FilterProducts showFilters={showFilters} />
                  <motion.div animate={{ width: showFilters ? '80%' : '100%' }}>
                     <div className='grid grid-cols-12 gap-4 mt-6'>
                        {PRODUCTS.map((item) => (
                           <Product props={item} key={item.id} />
                        ))}
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ProductsScreen
