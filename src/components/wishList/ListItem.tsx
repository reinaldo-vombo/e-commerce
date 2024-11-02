'use client'
import Image from "next/image"
import CardBody from "../shared/CardBody"
import { Separator } from "../ui/separator"
import Link from "next/link"
import { useWishlistStore } from "@/store/wishListStore"
import { Icons } from "@/constant/icons"
import { Button } from "../ui/button"
import ListItem from "../mobile/wish-list/ListItem"
import { ScrollArea } from "../ui/scroll-area"


const FavoriteItem = () => {
   const { wishlist, removeFromWishlist } = useWishlistStore()
   return (
      <div className="mt-36 lg:mt-0">
         <ScrollArea className="h-[500px]">

            {wishlist.length > 0 ? wishlist.map((item) => (
               <>
                  <div className="space-y-6 hidden lg:block" key={item.id}>
                     <div className="flex flex-col items-center justify-between md:flex-row">
                        <CardBody>
                           <Link href={`/productos/${item.id}`}>
                              <Image src={item.image} width={80} height={80} alt={item.title} />
                           </Link>
                        </CardBody>
                        <div className="grid gap-2">
                           <h2 className="line-clamp-1">{item.title}</h2>
                           <div className="flex flec items-center justify-end gap-4">
                              <Button aria-label="shopping cart icon">
                                 <Icons.shoppingCart width={20} />
                              </Button>
                              <Button aria-label="x icon" onClick={() => removeFromWishlist(item.id)}>
                                 <Icons.x width={20} />
                              </Button>
                           </div>
                        </div>
                     </div>
                     <Separator />
                  </div>
                  <ListItem props={item} />
               </>
            )) : (
               <div className="text-center flex flex-col items-center justify-center gap-6 h-full">
                  <Icons.heart className="mx-auto" fill="red" width={50} />
                  <h2 className="h3-bold">Sua lista de favoritos está vazia</h2>
               </div>
            )}
         </ScrollArea>
      </div>
   )
}

export default FavoriteItem
