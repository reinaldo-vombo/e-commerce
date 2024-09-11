import Image from "next/image"
import CardBody from "../shared/CardBody"
import { Separator } from "../ui/separator"
import { TCartItem } from "../cart/type"
import Link from "next/link"


const Item = ({ product }: TCartItem) => {
   const { noBackground, title, id } = product
   return (
      <li className="space-y-6">
         <div className="flex items-center justify-between">
            <CardBody>
               <Link href={`/productos/${id}`}>
                  <Image src={noBackground} width={80} height={80} alt={title} />
               </Link>
            </CardBody>
            <h2 className="line-clamp-1">{title}</h2>
         </div>
         <Separator />
      </li>
   )
}

export default Item
