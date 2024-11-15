'use client'
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
type TAlertModal = {
   trigger: any
   className?: string
   title?: string
   description?: string
   label?: string
   onSubmit: () => void
}


const AlertModal = ({ trigger, title, description, label, className, onSubmit }: TAlertModal) => {
   return (
      <AlertDialog>
         <AlertDialogTrigger className={className} aria-label={label ? label : 'dialog'}>{trigger}</AlertDialogTrigger>
         <AlertDialogContent>
            <AlertDialogHeader>
               <AlertDialogTitle>{title ? title : 'Are you absolutely sure?'}</AlertDialogTitle>
               <AlertDialogDescription>
                  {description ? description :
                     'This action cannot be undone. This will permanently delete your account and remove your data from our servers.'}
               </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
               <AlertDialogCancel>Cancel</AlertDialogCancel>
               <AlertDialogAction onClick={onSubmit}>Continue</AlertDialogAction>
            </AlertDialogFooter>
         </AlertDialogContent>
      </AlertDialog>

   )
}

export default AlertModal
