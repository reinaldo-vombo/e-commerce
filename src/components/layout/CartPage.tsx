'use client'

import { Icons } from "@/constant/icons"
import Link from "next/link"
import ListItem from "../cart/ListItem"
import Breadcrumbe from "../shared/Breadcrumbe"
import { useState } from "react"
import { useCartStore } from "@/store/cartStore"

const CartPage = () => {
   const cart = useCartStore((state) => state.cart);
   const [products, setProducts] = useState(cart);
   const getInitialTotalPrice = () => {
      return cart.reduce((total, product) => total + product.price, 0);
   };
   const [totalPrice, setTotalPrice] = useState(getInitialTotalPrice);

   const handlePriceChange = (newPrice: number, productId: string) => {
      setProducts((prevProducts) =>
         prevProducts.map((product) =>
            product.id === productId ? { ...product, price: newPrice } : product
         )
      );

      const updatedTotalPrice = products.reduce((total, product) => total + product.price, 0);
      setTotalPrice(updatedTotalPrice);
   };
   return (
      <section>
         <Breadcrumbe title='Carrinho' />
         <div className="padding">
            <div className="container mt-16">
               <div className='grid grid-cols-12 gap-4 mx-20'>
                  <div className="col-span-12">
                     <h2 className='h3-bold'>Seu carrinho de compras</h2>
                     <ListItem onPriceChange={handlePriceChange} cart={cart} />
                     <div className='flex items-center justify-between mt-8 pr-9'>
                        <Link href='/' className='flex items-center gap-4'>
                           <Icons.arrowLeft width={20} />
                           <span className='base-semibold'>Voltar a loja</span>
                        </Link>
                        <div className='flex items-center gap-11'>
                           <span>SubTotal:</span>
                           <h3 className='base-semibold'>{totalPrice}(kz)</h3>
                        </div>
                        <Link href='/checkout' className="flex items-center gap-4">
                           <span className='base-semibold'>Coninuar</span>
                           <Icons.arrowRight width={20} />
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default CartPage
