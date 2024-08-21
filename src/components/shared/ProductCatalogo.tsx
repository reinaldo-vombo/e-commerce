import { Icons } from '@/constant/icons'
import { SUB_CATEGORY } from '@/constant/site-content'
import { Dispatch, SetStateAction, useState } from 'react'
import { Separator } from '../ui/separator'
type TCatalogo = {
   setShowFilters: Dispatch<SetStateAction<boolean>>
}

const ProductCatalogo = ({ setShowFilters }: TCatalogo) => {
   const [category, setCategory] = useState('Novos')
   const handleSeletedCategory = (category: string) => {
      setCategory(category)
   }
   return (
      <div className='space-y-6'>
         <div className='flex items-center justify-between'>
            <h2 className='h3-bold'>Spatos & Tenis/ Homens</h2>
            <div className='flex items-center gap-4'>
               {SUB_CATEGORY.map((item) => (
                  <button className={`${item === category ? 'text-black font-bold' : 'text-slate-500'} `} onClick={() => handleSeletedCategory(item)} key={item}>{item}</button>
               ))}
            </div>
            <button onClick={() => setShowFilters(pv => !pv)}>
               <Icons.filter width={30} />
            </button>
         </div>
         <Separator />
      </div>
   )
}

export default ProductCatalogo
