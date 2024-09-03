import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'
import { CATEGORIES } from '@/constant/site-content'
import { FilterOptions } from '@/hooks/type'
type TFiter = {
   onChange: (filter: FilterOptions) => void
}

const CategoryDropdwon = ({ onChange }: TFiter) => {
   return (
      <Accordion type='multiple'>
         <AccordionItem value='item1'>
            <AccordionTrigger>
               <h3 className='base-semibold tracking-wider'>Categoria</h3>
            </AccordionTrigger>
            <AccordionContent>
               <div className='grid gap-3 place-items-start'>
                  {CATEGORIES.map((item) => (
                     <button className='flex items-center justify-between w-full font-medium' onClick={() => onChange({ category: item })} key={item}>
                        <span className='text-slate-500'>{item}</span>
                        <b>8</b>
                     </button>
                  ))}
               </div>
            </AccordionContent>
         </AccordionItem>
      </Accordion>
   )
}

export default CategoryDropdwon
