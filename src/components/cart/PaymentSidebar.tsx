'use client'
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/constant/icons"
import { useState } from "react"
import { Button } from "../ui/button"
import { MasteCardLogo, VisaLogo } from "@/constant/svgIcons"
import CartForm from "../forms/Cart"

const PAYMENTS = [
   { id: '1', name: 'masterCard', logo: <MasteCardLogo width={40} height={40} /> },
   { id: '2', name: 'visa', logo: <VisaLogo width={40} height={40} fill="#fff" /> }
]

const PaymentSidebar = () => {
   const [isOpen, setIsOpen] = useState(false)
   const [paymentType, setPaymentType] = useState<string | null>(null)

   const selectePayment = (index: string) => {
      setPaymentType(index)
   };
   return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
         <SheetTrigger className="flex items-center justify-center gap-4">
            <span className='base-semibold'>Coninuar</span>
            <Icons.arrowRight width={20} />
         </SheetTrigger>
         <SheetContent className="bg-black text-white px-0 pb-0">
            <div className="relative h-full">
               <div className="px-8">
                  <SheetHeader className="space-y-7">
                     <SheetTitle className="text-center text-white h3-bold">Pagamento</SheetTitle>
                  </SheetHeader>
                  <div className="h-[79%] mt-16 flex flex-col relative">
                     <div className="space-y-7">
                        <h3 className="base-semibold">Selecione tipo cartão</h3>
                        <div className="flex items-center justify-center gap-4">
                           {PAYMENTS.map((type) => (
                              <button type="button" className={`${paymentType === type.id ? 'border-slate-300 border-4 rounded-lg' : ''} p-2`} aria-label="master card logo" onClick={() => selectePayment(type.id)} key={type.id}>
                                 {type.logo}
                              </button>
                           ))}
                        </div>
                        <CartForm />
                     </div>
                  </div>
               </div>
               <Button className="bg-green-500 w-full rounded-none absolute bottom-0 inset-x-0">Confirmar pagamento</Button>
            </div>
         </SheetContent>
      </Sheet>
   )
}

export default PaymentSidebar
