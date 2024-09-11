'use client'
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "../ui/separator"
import { Icons } from "@/constant/icons"
import { PRODUCTS } from "@/constant/site-content"
import { useState } from "react"
import Item from "./ListItem"
import EmptyList from "./EmptyList"

const WishList = () => {

   const [isOpen, setIsOpen] = useState(false)

   return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
         <SheetTrigger className="hover:bg-slate-200 rounded-full p-2 flex items-center justify-center">
            <Icons.heart width={25} />
         </SheetTrigger>
         <SheetContent className="space-y-7">
            <SheetHeader className="space-y-7">
               <SheetTitle className="text-center">Sua lista de desejos</SheetTitle>
            </SheetHeader>
            <Separator />
            <div className="h-full flex flex-col">
               <ul>
                  {PRODUCTS.length > 0 ? PRODUCTS.map((item) => <Item product={item} key={item.id} />
                  ) : <EmptyList onChange={setIsOpen} />}
               </ul>
            </div>
         </SheetContent>
      </Sheet>
   )

}

export default WishList
