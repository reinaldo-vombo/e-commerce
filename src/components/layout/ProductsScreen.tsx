'use client'
import { useState } from 'react'
import Breadcrumbe from '../shared/Breadcrumbe'
import { motion } from 'framer-motion'
import Product from '../product/ProductList'
import FilterProducts from '../product/Filter'
import ProductCatalogo from '../shared/ProductCatalogo'
import { usePathname } from 'next/navigation'
import { TProductFilters } from '@/types'
import useProductFiter from '@/hooks/useProductFiter'
import { FilterOptions } from '@/hooks/type'

const ProductsScreen = () => {
   const path = usePathname()

   const getGender = () => {
      switch (path) {
         case '/productos/categoria/mens':
            return "Men's Shoes";
         case '/productos/categoria/womens':
            return "Women's Shoes";
         case '/productos/categoria/children':
            return "Children's Shoes"
         default:
            return 'Productos';
      }
   }
   const [showFilters, setShowFilters] = useState(true)
   const { filterdProduct, filters, setFilters } = useProductFiter()
   const FilterOptions = (newFilters: Partial<FilterOptions>) => {
      setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }))
   }

   return (
      <section className='relative overflow-hidden isolate'>
         <Breadcrumbe coverImage='/cover1.webp' title={getGender()} />
         <div className="padding">
            <div className="container space-y-7">
               <ProductCatalogo setShowFilters={setShowFilters} gender={getGender} />
               <div className="flex gap-4">
                  <FilterProducts onChange={FilterOptions} showFilters={showFilters} />
                  <motion.div animate={{ width: showFilters ? '80%' : '100%' }}>
                     <div className='grid grid-cols-12 gap-4 mt-6 overflow-y-auto'>
                        {filterdProduct.map((item) => (
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
