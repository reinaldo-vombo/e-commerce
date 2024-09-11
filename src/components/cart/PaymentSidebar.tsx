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
import Image from "next/image"
import { Separator } from "../ui/separator"
import { Input } from "../ui/input"
import { TPaymentProps } from "./type"
import { toast } from "sonner"

const PAYMENTS = [
   { id: '1', name: 'masterCard', logo: <MasteCardLogo width={40} height={40} /> },
   { id: '2', name: 'visa', logo: <VisaLogo width={40} height={40} /> }
]
const user = { avatar: '/avatar.jpg', name: 'Reginalde Baggle' }

const PaymentSidebar = ({ totalPrice }: TPaymentProps) => {
   const [isOpen, setIsOpen] = useState(false)
   const [promoCode, setPromoCode] = useState('');
   const [discount, setDiscount] = useState(0);
   const [paymentType, setPaymentType] = useState<string | null>(null)

   const selectePayment = (index: string) => {
      setPaymentType(index)
   };


   const applyPromoCode = () => {
      if (promoCode === 'DISCOUNT10') {
         setDiscount(0.1); // 10% discount
         toast.success('preço reduzido a 10%')
      } else if (promoCode === 'DISCOUNT20') {
         setDiscount(0.2); // 20% discount
         toast.success('preço reduzido a 20%')
      } else {
         setDiscount(0);
         toast.warning('Codigo invalido');
      }
   };

   const discountedPrice = totalPrice - totalPrice * discount;
   return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
         <SheetTrigger className="flex items-center justify-center gap-4">
            <span className='base-semibold'>Coninuar</span>
            <Icons.arrowRight width={20} />
         </SheetTrigger>
         <SheetContent className="px-0 pb-0">
            <div className="relative h-full">
               <div className="px-8">
                  <SheetHeader className="space-y-7 flex items-center justify-between">
                     <SheetTitle className="text-center base-semibold">Informação de Pagamento</SheetTitle>
                     <Image src={user.avatar} className="rounded-lg size-12" width={460} height={460} alt={user.name} />
                  </SheetHeader>
                  <div className="h-[79%] mt-12 flex flex-col relative space-y-10">
                     <div className="grid gap-6">
                        <div className="rounded-md outline p-2 text-center outline-slate-200 flex items-center gap-4 text-green-500">
                           <Icons.truck width={20} />
                           <span>Você ganhou entrega grátis</span>
                        </div>
                        <div className="rounded-md outline p-2 text-center outline-slate-200 flex items-center gap-4">
                           <Icons.arrowPath width={20} />
                           <span>Devoluções gratuitas em todos os pedidos qualificados.</span>
                        </div>
                     </div>
                     <div className="space-y-2">
                        <h3 className="base-semibold">Aplicar um código promocional</h3>
                        <div className="flex items-center gap-2">
                           <Input
                              type="text"
                              value={promoCode}
                              onChange={(e) => setPromoCode(e.target.value)}
                              placeholder="código promocional" />
                           <Button type="button" onClick={applyPromoCode}>Aplicar</Button>
                        </div>
                     </div>
                     <div className="space-y-7">
                        <h3 className="base-semibold">Selecione tipo cartão</h3>
                        <div className="flex items-center justify-center gap-4">
                           {PAYMENTS.map((type) => (
                              <button type="button" className={`${paymentType === type.id ? 'outline-slate-300' : 'outline-slate-200'} outline rounded-lg p-2`} aria-label="master card logo" onClick={() => selectePayment(type.id)} key={type.id}>
                                 {type.logo}
                              </button>
                           ))}
                        </div>
                        <Separator />
                        <div>
                           <ul className="grid gap-5">
                              <li className="flex justify-between">SubTotal: <b>{discountedPrice.toFixed(2)}</b></li>
                              <li className="flex justify-between">Custos de envio: <b>Gratis</b></li>
                              <li className="flex justify-between">Imposto sobre vendas: <b>-</b></li>
                              <li></li>
                           </ul>
                        </div>
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
