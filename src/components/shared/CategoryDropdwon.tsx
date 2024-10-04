import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { CATEGORIES } from '@/constant/site-content'
import { FilterOptions } from '@/hooks/type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
type TFiter = {
   createQueryString: (name: string, value: string) => string;
}

const CategoryDropdwon = ({ createQueryString }: TFiter) => {
   const pathname = usePathname()
   return (
      <Accordion type='multiple'>
         <AccordionItem value='item1'>
            <AccordionTrigger>
               <h3 className='base-semibold tracking-wider'>Categoria</h3>
            </AccordionTrigger>
            <AccordionContent>
               <div className='grid gap-3 place-items-start'>
                  {CATEGORIES.map((item) => (
                     <Link href={pathname + '?' + createQueryString('sort', 'desc')} scroll={false} className='flex items-center justify-between w-full font-medium' key={item.id}>
                        <span className='text-slate-500'>{item.name}</span>
                        <b>8</b>
                     </Link>
                  ))}
               </div>
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   )
}

export default CategoryDropdwon
