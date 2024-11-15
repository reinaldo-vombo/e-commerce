'use client'

import { Icons } from "@/constant/icons"
import Link from "next/link"
import ListItem from "../cart/ListItem"
import { useCartStore } from "@/store/cartStore"

const CartPage = () => {
   const cart = useCartStore((state) => state.cart);

   return (
      <div>
         <div className="mt-16">
            <div className='gap-4'>
               <ListItem cart={cart} />
               <div className='flex items-center justify-between mt-8 pr-9'>
                  <Link href='/' className='flex items-center gap-4'>
                     <Icons.arrowLeft width={20} />
                     <span className='base-semibold'>Voltar a loja</span>
                  </Link>
                  <Link href='/checkout' className="flex items-center gap-4">
                     <span className='base-semibold'>Coninuar</span>
                     <Icons.arrowRight width={20} />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CartPage
