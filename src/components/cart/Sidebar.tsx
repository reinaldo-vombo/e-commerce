'use client'
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/constant/icons"
import { PRODUCTS } from "@/constant/site-content"
import { Button } from "../ui/button"
import { Separator } from "../ui/separator"
import { useState } from "react"
import EmptyCart from "./EmptyCart"
import ICartItem from "../wishList/ListItem"

const HAS_ITEM = PRODUCTS.length
const getTotalPrice = () => {
   return PRODUCTS.reduce((total, product) => total + product.price, 0);
};

const CartSidebar = () => {
   const [isOpen, setIsOpen] = useState(false)
   return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
         <SheetTrigger className="hover:bg-slate-200 rounded-full p-2 flex items-center justify-center">
            <Icons.shoppingCart width={25} fill={HAS_ITEM > 0 ? '#000' : 'none'} />
         </SheetTrigger>
         <SheetContent className="space-y-7">
            <SheetHeader className="space-y-7">
               <SheetTitle className="text-center">Seu Carrinho</SheetTitle>
               <h3 className="text-center">Items: <b>{HAS_ITEM}</b></h3>
               <h3 className="text-center">Total: <b>{getTotalPrice()}</b> (kz)</h3>
            </SheetHeader>
            <Separator />
            <div className="h-full flex flex-col">
               <ul>
                  {PRODUCTS.length > 0 ? PRODUCTS.map((item) => <ICartItem product={item} key={item.id} />
                  ) : <EmptyCart setIsOpen={setIsOpen} />}
               </ul>
               <Button className="bg-bravo w-full mt-auto">Confirmar pagamento</Button>
            </div>
         </SheetContent>
      </Sheet>
   )
}

export default CartSidebar
