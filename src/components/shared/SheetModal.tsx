
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { SheetProps } from "./type"

const SheetModal = ({ children, side, trigger, label, className, triggerClass }: SheetProps) => {
   return (
      <Sheet>
         <SheetTrigger aria-label={label} className={triggerClass}>
            {trigger}
         </SheetTrigger>
         <SheetContent side={side} className={className}>
            {children}
         </SheetContent>
      </Sheet>
   )
}

export default SheetModal
