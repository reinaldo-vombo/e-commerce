import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger
} from '../ui/accordion'

const Accordian = () => {
   return (
      <Accordion type='multiple'>
         <AccordionItem value='item1'>
            <AccordionTrigger>
               <h3 className='base-semibold tracking-wider'>Categoria</h3>
            </AccordionTrigger>
            <AccordionContent>

            </AccordionContent>
         </AccordionItem>
      </Accordion>
   )
}

export default Accordian
