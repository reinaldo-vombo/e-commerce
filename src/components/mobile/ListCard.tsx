import Image from "next/image";
import { TProductProps } from "../product/type"
interface IProps extends TProductProps {
   onChange: React.Dispatch<React.SetStateAction<string | null>>
}

const ListCard = ({ props, onChange }: IProps) => {
   const { title, image, price, id } = props;
   return (
      <div onClick={() => onChange(id)}>
         <div className="shadow-md rounded-lg p-2 flex items-center justify-between">
            <div className="space-y-3">
               <h2 className="base-semibold">{title}</h2>
               <span className="base-semibold">{price} (kz)</span>
            </div>
            <div className="relative size-20">
               <Image src={image} className="object-cover rounded-lg" fill sizes="100%" alt={title} />
            </div>
         </div>
      </div>
   )
}

export default ListCard;
