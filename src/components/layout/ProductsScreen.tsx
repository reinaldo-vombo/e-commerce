'use client'
import { useCallback, useEffect, useState } from 'react'
import Breadcrumbe from '../shared/Breadcrumbe'
import { motion } from 'framer-motion'
import Product from '../product/ProductList'
import FilterProducts from '../product/Filter'
import ProductCatalogo from '../shared/ProductCatalogo'
import { useSearchParams } from 'next/navigation'
import useProductFiter from '@/hooks/useProductFiter'
import Image from 'next/image'

const ProductsScreen = () => {
   const searchParams = useSearchParams()

   const [showFilters, setShowFilters] = useState(true)
   const price = searchParams.get('price')
   const color = searchParams.get('color')
   const gender = searchParams.get('gender')
   const brand = searchParams.get('brand')

   const initialFilter = {
      minPrice: price ? parseFloat(price.split('-')[0]) : undefined,
      maxPrice: price ? parseFloat(price.split('-')[1]) : undefined,
      color: color || undefined,
      gender: gender || undefined,
      brand: brand || undefined,
   };
   const { filterdProduct, setFilters } = useProductFiter(initialFilter)
   useEffect(() => {
      // Set filters when URL parameters change
      setFilters(initialFilter);
   }, [searchParams,]);

   const createQueryString = useCallback(
      (name: string, value: string) => {
         const params = new URLSearchParams(searchParams.toString())
         params.set(name, value)

         return params.toString()
      },
      [searchParams]
   )

   return (
      <section className='relative overflow-hidden isolate'>
         <Breadcrumbe coverImage='/cover1.webp' title='mens' />
         <div className="padding">
            <div className="container relative space-y-7">
               <ProductCatalogo
                  createQueryString={createQueryString}
                  setShowFilters={setShowFilters}
                  gender='mens'
               />
               <div className="flex gap-4">
                  <FilterProducts createQueryString={createQueryString} showFilters={showFilters} />
                  <motion.div animate={{ width: showFilters ? '80%' : '100%' }}>
                     <div className='grid grid-cols-12 gap-4 mt-6 overflow-y-auto'>
                        {filterdProduct && filterdProduct.length > 0 ? filterdProduct.map((item) => (
                           <Product props={item} key={item.id} />
                        )) : (
                           <div className="flex justify-center items-center space-y-5 h-screen">
                              <Image src='/box-icon.png' width={80} height={80} alt='box icon' />
                              <h2 className='h3-bold text-center'>Ops! Parece que estámos sem product</h2>
                           </div>
                        )}
                     </div>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default ProductsScreen
