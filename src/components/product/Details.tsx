import Image from "next/image"
import { TProductModal } from "./type"

const Details = ({ title, price, image, description }: TProductModal) => {
   return (
      <div className="flex flex-col gap-6">
         <div className="mr-auto flex items-center gap-4">
            <Image src={image} className="rounded-md object-cover" width={80} height={50} alt={title} />
            <div className="grid gap-2">
               <h2 className="base-semibold">{title}</h2>
               <h3 className="base-semibold">{price}(kz)</h3>
            </div>
         </div>
         <div>
            <p>The Spizike takes elements of five classic Jordans, combines them and gives you one iconic sneaker. It&aposs an homage to Spike Lee formally introducing Hollywood and hoops in a culture moment. You get a great-looking pair of kicks with some history. What more can you ask for? Ya dig?</p>
            <b>Beneficios</b>
            <ul>
               <li>The real and synthetic leather and textile upper adds durability.</li>
               <li>Nike Air technology absorbs impact for cushioning with every step</li>
               <li>Solid rubber outsole provides durability and traction.</li>
            </ul>
            <b>Product details</b>
            <ul>
               <li>Colour Shown: Black/Anthracite/Black</li>
               <li>Style: FQ1759-001</li>
               <li>Country/Region of Origin: Vietnam</li>
            </ul>
         </div>
      </div>
   )
}

export default Details
