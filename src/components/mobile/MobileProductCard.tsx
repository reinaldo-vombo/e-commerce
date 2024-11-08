'use client'
import { useCartStore } from "@/store/cartStore";
import { TProductProps } from "../product/type"
import { motion } from 'framer-motion';
import { useWishlistStore } from "@/store/wishListStore";
import Image from "next/image";
import { Icons } from "@/constant/icons";
import SheetModal from "../shared/SheetModal";
import { Feedback } from "../animata/feedback";
import { Dispatch, SetStateAction, useState } from "react";
import { FEEDBACKS } from "@/constant/site-content";
import Stars from "../product/Stars";
import { ScrollArea } from "../ui/scroll-area";
interface TProps extends TProductProps {
   onToggleModal: Dispatch<SetStateAction<string | null>>
}

const MobileProductCard = ({ props, onToggleModal }: TProps) => {
   const [stars, setStars] = useState<null | number>(null)
   const { title, image, price, id } = props
   const addToCart = useCartStore((state) => state.addToCart);
   const { addToWishlist, wishlist, removeFromWishlist } = useWishlistStore();
   const { cart } = useCartStore();

   const isInWishlist = wishlist.find(item => {
      return item.id === id
   })
   const isInCart = cart.find(item => {
      return item.id === id
   })
   const handleAddToWishlist = () => {
      if (isInWishlist) {
         removeFromWishlist(id)
      } else {
         addToWishlist({ id, title, image })
      }
   }

   return (
      <div className="col-span-4 space-y-5 sm:hidden relative">
         <motion.div layoutId={props.id} className="h-56 relative" onClick={() => onToggleModal(props.id)}>
            <Image src={image} className="object-cover rounded-lg" fill sizes="100%" alt={title} />
         </motion.div>
         <motion.button whileTap={{ scale: 0.5 }} className={`${isInWishlist?.id === id ? 'text-red-500' : ''} absolute top-5 right-5`} onClick={handleAddToWishlist}>
            <Icons.heart width={30} fill={`${isInWishlist?.id === id ? 'red' : 'none'}`} />
         </motion.button>
         <motion.button whileTap={{ scale: 0.5 }} className={`absolute top-5 left-5`} onClick={() => addToCart({ id, title, price, image })}>
            <Icons.shoppingCart width={30} fill={`${isInCart?.id === id ? 'black' : 'none'}`} />
         </motion.button>
         <div className="flex items-center justify-between">
            <div className="space-y-3">
               <h2 className="base-semibold">{title}</h2>
               <span>{price} (kx)</span>
            </div>
            <SheetModal side="bottom" trigger={<Starts />} className="max-w-96" label="feebdacks modal">
               <div className="space-y-4 mt-6 pr-3">
                  <Feedback setStars={setStars} stars={stars} />
                  <h2 className="base-semibold underline">Revisões recentes</h2>
                  <ScrollArea className="h-[400px]">
                     {FEEDBACKS.map((feed) => (
                        <div className='mt-8' key={feed.id}>
                           <div className='flex flex-col items-center justify-between'>
                              <Stars length={feed.stars} />
                              <h3 className='base-semibold text-gray-400'>Reginalde - 22 Feb 2024</h3>
                           </div>
                           <div className='mt-6'>
                              <h3 className='base-semibold text-center'>{feed.replay}</h3>
                           </div>
                        </div>
                     ))}
                  </ScrollArea>
               </div>
            </SheetModal>
         </div>
      </div>
   )
}

const Starts = () => {
   return (
      <div className="flex items-center gap-2 cursor-pointer">
         {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
               <svg className={`w-4 h-4 text-yellow-300 ms-1`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
               </svg>
            </div>
         ))}
      </div>
   )
}

export default MobileProductCard;
