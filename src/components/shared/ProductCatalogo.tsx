import { Icons } from '@/constant/icons'
import { SUB_CATEGORY } from '@/constant/site-content'
import { Dispatch, SetStateAction, useState } from 'react'
import { Separator } from '../ui/separator'
type TCatalogo = {
   setShowFilters: Dispatch<SetStateAction<boolean>>
   gender: () => string
}

const ProductCatalogo = ({ setShowFilters, gender }: TCatalogo) => {
   const [category, setCategory] = useState('Novos')
   const handleSeletedCategory = (category: string) => {
      setCategory(category)
   }
   return (
      <div className='space-y-6 sticky'>
         <div className='flex items-center justify-between'>
            <h2 className='h3-bold'>Spatos & Tenis/ {gender()}</h2>
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
