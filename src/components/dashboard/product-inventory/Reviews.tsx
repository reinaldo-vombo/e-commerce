import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Star } from 'lucide-react'

const Reviews = () => {
   return (
      <div className='space-y-3'>
         <h3 className='base-semibold'>Revisão</h3>
         <Accordion type='multiple'>
            <AccordionItem value='item1'>
               <AccordionTrigger>
                  <h3 className='base-semibold tracking-wider'>(5) revisões</h3>
               </AccordionTrigger>
               <AccordionContent className='space-y-4'>
                  {Array.from({ length: 5 }).map((_, index) => (
                     <div className='space-y-3' key={index}>
                        <div className='flex items-center justify-between'>
                           <h3 className='base-semibold'>Reginalde</h3>
                           <div className='flex items-center gap-3'>
                              {[1, 2, 3, 4, 5].map((star) => (
                                 <Star
                                    key={star}
                                    className='size-3 cursor-pointer text-yellow-400 fill-yellow-400'
                                 />
                              ))}
                           </div>
                        </div>
                        <div>
                           <p className='text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quidem iste reprehenderit architecto, perspiciatis possimus dolores? Enim dicta neque voluptatem saepe eum rem perferendis, eligendi adipisci quasi placeat architecto obcaecati.</p>
                        </div>
                     </div>
                  ))}
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   )
}

export default Reviews
