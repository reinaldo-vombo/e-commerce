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
import { Fragment, Suspense, useEffect, useState } from 'react'
import { PRODUCTS } from "@/constant/site-content"
import Image from "next/image"
import { TProduct } from "./product/type"
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import SearcList from "./mobile/SearcList"
type TSeachBox = {
   trigger: any
}

const POPULAR_SEACH = ['Nike Air Max Plus', 'Patta Chuck 70 Marquis Hi', 'Air MAx', 'Blazer']
const SearchDropdow = ({ trigger }: TSeachBox) => {
   const searchParams = useSearchParams();
   const pathname = usePathname();
   const { replace } = useRouter();
   const [filteredProducts, setFilteredProducts] = useState<TProduct[] | []>([]);
   const query = searchParams.get('query')?.toString() || '';

   // Update filtered products whenever the query changes
   useEffect(() => {
      if (query) {
         const filtered = PRODUCTS.filter(product =>
            product.title.toLowerCase().includes(query.toLowerCase())
         );
         setFilteredProducts(filtered);
      } else {
         setFilteredProducts([]); // Reset to original products if no query
      }
   }, [query]);

   const handleSearch = useDebouncedCallback((term) => {

      const params = new URLSearchParams(searchParams);
      if (term) {
         params.set('query', term);
      } else {
         params.delete('query');
      }
      replace(`${pathname}?${params.toString()}`);
   }, 300);
   return (
      <Sheet>
         <SheetTrigger className="w-full md:w-auto">
            {trigger}
         </SheetTrigger>
         <SheetContent side={"top"} className="max-w-96 sm:max-w-full">
            <div className="md:container mt-4 md:mt-0">
               <div className="grid grid-cols-12">
                  <SheetHeader className="col-span-12 md:col-span-3">
                     <SheetTitle className="hidden md:block"><Logo width={90} /></SheetTitle>
                     <div className="mt-6 hidden md:block">
                        <h3>Termor de pesquisa populares</h3>
                        <ul className="grid gap-4">
                           {POPULAR_SEACH.map((item, index) => (
                              <li className="text-[1.5rem] cursor-pointer leading-[140%] tracking-tighter" key={index} onClick={() => handleSearch(item)}>
                                 {item}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </SheetHeader>
                  <div className="col-span-12 md:col-span-9 space-y-6">
                     <div className="relative">
                        <Input
                           onChange={(e) => {
                              handleSearch(e.target.value);
                           }}
                           defaultValue={searchParams.get('query')?.toString()}
                           className="px-10 bg-gray-200" placeholder="Pesquisar" />
                        <Icons.search width={25} className="absolute top-[6px] left-3" />
                     </div>
                     <Suspense key={query} fallback={<div>Loading...</div>}>
                        <div className="grid grid-cols-12 gap-4">
                           {filteredProducts.map((product) => (
                              <Fragment key={product.id}>
                                 <div className="hidden sm:flex col-span-3 flex-col items-center gap-4">
                                    <div className="relative">
                                       <Image src={product.image} className="rounded-xl w-16 md:w-[500px]" width={500} height={500} alt={product.title} />
                                    </div>
                                    <div className="space-y-4 mt-4 w-full">
                                       <h2 className="font-bold text-sm">{product.title}</h2>
                                       <span className="text-slate-300 hidden md:block">Sapatilha para homem</span>
                                       <h3 className="md:font-bold text-sm">{product.price} kz</h3>
                                    </div>
                                 </div>
                                 {/* Mobile */}
                                 <SearcList props={product} />
                                 {/* Mobile */}
                              </Fragment>
                           ))}
                        </div>
                     </Suspense>
                  </div>
               </div>
            </div>
         </SheetContent>
      </Sheet>

   )
}

export default SearchDropdow
