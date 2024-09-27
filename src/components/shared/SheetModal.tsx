
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { SheetProps } from "./type"

const SheetModal = ({ children, side, trigger, label }: SheetProps) => {
   return (
      <Sheet>
         <SheetTrigger aria-label={label}>
            {trigger}
         </SheetTrigger>
         <SheetContent side={side}>
            {children}
         </SheetContent>
      </Sheet>
   )
}

export default SheetModal
