
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../ui/sheet"
import { SheetProps } from "./type"

const SheetModal = ({ children, side, trigger, label, className, triggerClass, title }: SheetProps) => {
   return (
      <Sheet>
         <SheetTrigger aria-label={label} className={triggerClass}>
            {trigger}
         </SheetTrigger>
         <SheetContent aria-describedby="deplay item" side={side} className={className}>
            <SheetTitle className="font-semibold text-center">{title ? title : 'Modal dialog'}</SheetTitle>
            {children}
         </SheetContent>
      </Sheet>
   )
}

export default SheetModal
