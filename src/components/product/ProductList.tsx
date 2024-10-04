'use client'
import Link from 'next/link';
import { ConversLogo, NikeLogo } from '@/constant/svgIcons'
import CardBody from '../shared/CardBody'
import Image from 'next/image';
import { TProductProps } from './type';
import { motion } from 'framer-motion';
import { Icons } from '@/constant/icons';
import MoreDetails from './MoreDetails';
import { Button } from '../ui/button';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishListStore';

const ProductList = ({ props }: TProductProps) => {
   const { title, description, image, brand, price, id } = props
   const addToCart = useCartStore((state) => state.addToCart);
   const { addToWishlist, wishlist, removeFromWishlist } = useWishlistStore();

   const isInWishlist = wishlist.find(item => {
      return item.id === id
   })
   const handleAddToWishlist = () => {
      if (isInWishlist) {
         removeFromWishlist(id)
      } else {
         addToWishlist({ id, title, image })
      }
   }

   const getProductBrand = () => {
      switch (brand) {
         case 'Nike':
            return <NikeLogo width={50} height={50} />;
         case 'Converse':
            return <ConversLogo width={50} height={50} />;
         default:
            return null;
      }
   }
   return (
      <div className='col-span-4'>
         <CardBody className='relative'>
            <Link href={`/productos/${id}`}>
               <div className='relative h-[25rem] w-full'>
                  <Image src={image} fill sizes='100%' alt={title} />
               </div>
            </Link>
            <div>
               <div className='flex items-center justify-between'>
                  <span>{getProductBrand()}</span>
                  <MoreDetails
                     title={title}
                     description={description}
                     image={image}
                     price={price}
                  />
               </div>
               <div className='flex items-center justify-between'>
                  <h2 className='h3-bold line-clamp-1'>{title}</h2>
                  <h3 className='font-semibold'>{price} (kz)</h3>
               </div>
            </div>
            <Button className='w-full mt-4 rounded-xl bg-slate-200 text-black transition-colors hover:bg-black hover:text-white' onClick={() => addToCart({ id, title, price, image })}>Adicionar ao carrinho</Button>
            <motion.button whileTap={{ scale: 0.5 }} className={`${isInWishlist?.id === id ? 'text-red-500' : ''} absolute top-5 right-5`} onClick={handleAddToWishlist}>
               <Icons.heart width={30} fill={`${isInWishlist?.id === id ? 'red' : 'none'}`} />
            </motion.button>
         </CardBody>
      </div>
   )
}

export default ProductList
