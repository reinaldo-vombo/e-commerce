
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { SheetProps } from "./type"

const SheetModal = ({ children, side, trigger }: SheetProps) => {
   return (
      <Sheet>
         <SheetTrigger>
            {trigger}
         </SheetTrigger>
         <SheetContent side={side}>
            {children}
         </SheetContent>
      </Sheet>
   )
}

export default SheetModal
