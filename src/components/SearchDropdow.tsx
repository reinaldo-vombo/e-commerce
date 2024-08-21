'use client'
import {
   Sheet,
   SheetContent,
   SheetHeader,
   SheetTitle,
   SheetTrigger,
} from "@/components/ui/sheet"
import { Icons } from "@/constant/icons"
import { Logo } from "@/constant/svgIcons"
import { Input } from "./ui/input"
import { useState } from 'react'
import { PRODUCTS } from "@/constant/site-content"
import { TProduct } from "./types"
import Image from "next/image"

const POPULAR_SEACH = ['Nike Air Max Plus', 'Patta Chuck 70 Marquis Hi', 'Air MAx', 'Blazer']
const SearchDropdow = () => {
   const [searchTerm, setSearchTerm] = useState('');
   const [filteredProducts, setFilteredProducts] = useState<TProduct[] | []>([]);

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm)

      const filteredItems = PRODUCTS.filter((item) =>
         item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (searchTerm === '') {
         setFilteredProducts([])
      } else {
         setFilteredProducts(filteredItems);
      }

   }
   const slectePopularSearch = (search: string) => {
      setSearchTerm(search)
   }

   return (
      <Sheet>
         <SheetTrigger>
            <Icons.search width={25} />
         </SheetTrigger>
         <SheetContent side={"top"}>
            <div className="container">
               <div className="grid grid-cols-12">
                  <SheetHeader className="col-span-3">
                     <SheetTitle><Logo width={90} /></SheetTitle>
                  </SheetHeader>
                  <div className="col-span-9 space-y-6">
                     <div className="relative">
                        <Input
                           value={searchTerm}
                           onChange={handleInputChange}
                           className="px-10 bg-gray-200" placeholder="Pesquisar" />
                        <Icons.search width={25} className="absolute top-[6px] left-3" />
                     </div>
                     <div className="space-y-5">
                        {filteredProducts.length > 0 ? (
                           <div className="grid grid-cols-12 gap-4">
                              {filteredProducts.map((product) => (
                                 <div className="col-span-3" key={product.id}>
                                    <div className="relative">
                                       <Image src={product.image} className="rounded-xl" width={500} height={500} alt={product.title} />
                                    </div>
                                    <div className="space-y-4 mt-4">
                                       <h2 className="font-bold">{product.title}</h2>
                                       <span className="text-slate-300">Sapatilha para homem</span>
                                       <h3 className="font-bold">{product.price} kz</h3>
                                    </div>
                                 </div>
                              ))}
                           </div>
                        ) : (
                           <>
                              <h3>Termor de pesquisa populares</h3>
                              <ul className="grid gap-4">
                                 {POPULAR_SEACH.map((item, index) => (
                                    <li className="text-[1.5rem] cursor-pointer leading-[140%] tracking-tighter" key={index} onClick={() => slectePopularSearch(item)}>
                                       {item}
                                    </li>
                                 ))}
                              </ul>
                           </>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </SheetContent>
      </Sheet>

   )
}

export default SearchDropdow
