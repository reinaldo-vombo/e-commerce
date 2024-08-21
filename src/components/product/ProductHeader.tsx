import { Filter } from 'lucide-react'
import React from 'react'

const ProductHeader = () => {
   return (
      <div className='flex items-center justify-between p-2'>
         <h2 className='h2-bold'>New arrivel</h2>
         <div className='flex items-center gap-2'>
            <span>Todos productos</span>
            <button><Filter /></button>
         </div>
      </div>
   )
}

export default ProductHeader
