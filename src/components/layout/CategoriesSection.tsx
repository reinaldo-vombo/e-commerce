import { CATEGORY } from "@/constant/site-content"
import Image from "next/image"
import Link from "next/link"

const CategoriesSection = () => {
   return (
      <section className="padding">
         <div className="container space-y-6">
            <h2 className="h2-bold">Explore por categoria</h2>
            <div className="grid grid-cols-12 gap-4">
               {CATEGORY.map((item) => (
                  <div className="col-span-4 overflow-hidden relative" key={item.id}>
                     <Link href={`/productos/?gender=${item.title}`}>
                        <Image src={item.image} className="rounded-md w-full hover:scale-105 transition-all ease-linear" width={408} height={510} alt={item.title} />
                     </Link>
                     <div className="absolute bottom-3 inset-x-3">
                        <div className="bg-white rounded-full p-2 w-fit">
                           <h3>{item.title}</h3>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default CategoriesSection
