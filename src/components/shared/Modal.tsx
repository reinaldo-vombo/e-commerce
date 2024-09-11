import {
   Dialog,
   DialogContent,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog"
import { TModalProps } from "../types"

const Modal = ({ btn, children, title, className }: TModalProps) => {
   return (
      <Dialog>
         <DialogTrigger className={className}>{btn}</DialogTrigger>
         <DialogContent>
            <DialogHeader>
               <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            {children}
         </DialogContent>
      </Dialog>

   )
}

export default Modal
