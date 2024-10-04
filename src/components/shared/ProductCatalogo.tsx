import { Icons } from '@/constant/icons'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SUB_CATEGORY } from '@/constant/site-content'
import { Dispatch, SetStateAction, useState } from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
type TCatalogo = {
   createQueryString: (name: string, value: string) => string;
   setShowFilters: Dispatch<SetStateAction<boolean>>;
   gender: string
}

const ProductCatalogo = ({ setShowFilters, gender, createQueryString }: TCatalogo) => {
   const searchParams = useSearchParams()
   const router = useRouter()
   const pathname = usePathname()
   const category = searchParams.get('search')

   return (
      <div className='space-y-6 sticky'>
         <div className='flex items-center justify-between'>
            <h2 className='h3-bold'>Spatos & Tenis/ {gender}</h2>
            <div className='flex items-center gap-4'>
               {SUB_CATEGORY.map((item) => (
                  <Link href={pathname + '?' + createQueryString('sort', item.value)}
                     className={`${item.name === category ? 'text-black font-bold' : 'text-slate-500'} `}
                     key={item.name}>
                     {item.name}</Link>
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
