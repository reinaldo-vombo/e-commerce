import Image from "next/image"
import CardBody from "../shared/CardBody"
import { Separator } from "../ui/separator"
import { TCartItem } from "./type"


const ICartItem = ({ product }: TCartItem) => {
   const { noBackground, price, title } = product
   return (
      <li className="space-y-6">
         <div className="flex items-center justify-between">
            <CardBody>
               <Image src={noBackground} className="" width={80} height={80} alt={title} />
            </CardBody>
            <h2 className="line-clamp-1">{title}</h2>
         </div>
         <Separator />
      </li>
   )
}

export default ICartItem
