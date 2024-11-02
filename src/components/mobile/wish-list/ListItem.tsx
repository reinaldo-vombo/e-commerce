'use client'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from "@/constant/icons"
import Image from "next/image"
type TMobileList = {
   props: {
      image: string;
      title: string
   }
}
const ListItem = ({ props }: TMobileList) => {
   const { image, title } = props;
   return (
      <div className="col-span-6 mt-4 lg:hidden">
         <div className="relative w-full h-60">
            <Image src={image} className="rounded-lg object-cover" fill sizes="100%" alt={title} />
            <button type="button" className="absolute top-2 right-3" aria-label="shopping cart icon">
               <Icons.heart width={30} fill="red" className="text-red-500" />
            </button>
         </div>
         <div>
            <h2 className="h3-bold">{title}</h2>
         </div>
      </div>
   )
}

export default ListItem;
