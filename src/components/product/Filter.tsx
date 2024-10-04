
import { motion } from "framer-motion"
import { Separator } from "../ui/separator"
import { Slider } from "@/components/ui/slider"
import { BRANDS, COLORES, GENDER } from "@/constant/site-content"
import Dropdwon from "../shared/CategoryDropdwon"
import { HIDE_FILTERS, HIDE_FILTERS_CONTENT } from "@/lib/motion"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"

type TFilterProps = {
   showFilters: boolean
   createQueryString: (name: string, value: string) => string;
}

const FilterProducts = ({ showFilters, createQueryString }: TFilterProps) => {
   const pathname = usePathname()
   const searchParams = useSearchParams()
   const router = useRouter()
   const price = searchParams.get('price')
   const color = searchParams.get('color')
   const gender = searchParams.get('gender')
   const brand = searchParams.get('brand')

   const submitPrice = (price: number[]) => {
      router.push(pathname + '?' + createQueryString('price', `${price}`), { scroll: false })

      // if (price <= 15000) {
      // } else if (price > 15000) {
      //    onChange({ maxPrice: price[0] })
      // }
   }
   return (
      <motion.div className='relative p-2' initial={false} variants={HIDE_FILTERS} animate={showFilters ? 'show' : 'hidden'}>
         <motion.div className='' variants={HIDE_FILTERS_CONTENT} animate={showFilters ? 'show' : 'hidden'}>
            <div className='mt-6 space-y-4'>
               <div>
                  <Dropdwon createQueryString={createQueryString} />
               </div>
               {/* <div className="space-y-3">
                  <h3 className="base-semibold">Preços</h3>
                  <h3>Selected Price: ${price}</h3>
                  <Slider
                     defaultValue={[5000]}
                     max={30000}
                     min={5000}
                     step={1}
                     onValueCommit={(value) => submitPrice(value)}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                     <span>$5000</span>
                     <span>$30000</span>
                  </div>
               </div> */}
               <div className="space-y-3">
                  <h3 className="base-semibold">Género</h3>
                  <div className="grid gap-2">
                     {GENDER.map((item) => (
                        <Link href={pathname + '?' + createQueryString('gender', item.value)} scroll={false} className="cursor-pointer" key={item.id}>{item.name}</Link>
                     ))}
                  </div>
                  <Separator />
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Marcas</h3>
                  <div className="grid gap-2">
                     {BRANDS.map((brand) => (
                        <Link href={pathname + '?' + createQueryString('brand', brand.value)} scroll={false} key={brand.id} >
                           {brand.logo}
                        </Link>
                     ))}
                  </div>
                  <Separator />
               </div>
               <div className="space-y-3">
                  <h3 className="base-semibold">Cores</h3>
                  <div className="flex items-center flex-wrap gap-2">
                     {COLORES.map((currentColor) => (
                        <Link
                           href={pathname + '?' + createQueryString('color', currentColor.value)}
                           scroll={false}
                           className={`rounded-full size-6 cursor-pointer ${color === currentColor.value ? 'outline outline-black' : ''}`}
                           key={currentColor.id}
                           style={{ background: `${currentColor.value}` }} />
                     ))}
                  </div>
                  <Separator />
               </div>
            </div>
         </motion.div>
      </motion.div>
   )
}

export default FilterProducts
