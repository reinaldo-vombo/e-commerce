'use client'
import { MESSAGE_DELETE_ANIMATION, MESSAGE_DELETE_TRANSITION } from "@/lib/motion";
import { useCartStore } from "@/store/cartStore";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import MobileNav from "../TopNav";
import NavigationTab from "../bottomNav/NavigationTab";
import { Icons } from "@/constant/icons";

const DELETE_BTN_WIDTH = 70;
const CartMobilePage = () => {
   const cart = useCartStore((state) => state.cart);
   const removeFromCart = useCartStore((state) => state.removeFromCart);

   const handleDragEnd = (info: any, messageId: any) => {
      const dragDistance = info.point.x
      if (dragDistance < -DELETE_BTN_WIDTH) {
         removeFromCart(messageId)
      }
   }
   return (
      <section className="sm:hidden ios-swiper">
         <MobileNav title="Carrinho" />
         <ul className="h-screen">
            <AnimatePresence>
               {cart.length > 0 ? cart.map(message => (
                  <motion.li
                     className="li"
                     key={message.id}
                     exit={MESSAGE_DELETE_ANIMATION}
                     transition={MESSAGE_DELETE_TRANSITION}
                  >
                     <motion.div
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragEnd={(_, info) => handleDragEnd(info, message.id)}
                        className="msg-container"
                     >
                        <Image
                           className="user-icon"
                           src={message.image}
                           width={90}
                           height={90}
                           alt={message.title}
                        />
                        <div className="message-text base-semibold">
                           <h3>{message.title}</h3>
                           <p>{message.price} (kz)</p>
                        </div>
                     </motion.div>
                     <div className="delete-btn bg-red-500">
                        <span className="text-right text-white">Remover</span>
                     </div>
                  </motion.li>
               )) : (
                  <li className="mt-[50%] text-center">
                     <h2 className="base-semibold">Seu carrinho está vazio</h2>
                     <div className="flex mt-4">
                        <Icons.shoppingCart fill="#000" className="size-9 mx-auto" />
                     </div>
                  </li>
               )}
            </AnimatePresence>
         </ul>
         <NavigationTab />
      </section>
   )
}

export default CartMobilePage;
