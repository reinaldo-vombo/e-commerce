import { CUMPONY_LINKS, HELPE_LINKS, HELPER_LINKS, RESUCES_LINKS, SOCIAL_MEDIA } from "@/constant/site-content"
import { Logo } from "@/constant/svgIcons"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"

const Footer = () => {
   return (
      <footer>
         <div className="container py-16">
            <div className="grid grid-cols-12 gap-4">
               <div className="col-span-3 space-y-7">
                  <h2 className="font-bold text-lg">Recursos</h2>
                  <ul className="space-y-3 text-slate-800 font-medium">
                     {RESUCES_LINKS.map((item) => (
                        <li key={item.id} className="font-semibold text-sm">
                           <Link href={item.route}>{item.name}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-span-3 space-y-7">
                  <h2 className="font-bold text-lg">Ajuda</h2>
                  <ul className="space-y-3 text-slate-800 font-medium">
                     {HELPE_LINKS.map((item, i) => (
                        <li key={i} className="font-semibold text-sm">
                           <Link href={'#'}>{item}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-span-3 space-y-7">
                  <h2 className="font-bold text-lg">Empresa</h2>
                  <ul className="space-y-3 text-slate-800 font-medium">
                     {CUMPONY_LINKS.map((item) => (
                        <li key={item.id} className="font-semibold text-sm">
                           <Link href={item.route}>{item.name}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-span-3 space-y-7">
                  <Logo width={70} height={70} />
                  <p className="text-justify text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id est vero, recusandae corrupti error minima ipsum autem maiores, accusantium sapiente dignissimos dolore quisquam tempora numquam sed</p>
                  <div>
                     <ul className="flex items-center gap-4">
                        {SOCIAL_MEDIA.map((item) => (
                           <li key={item.id}>
                              <Link href={item.url}>
                                 <Image src={item.logo} className="w-6" width={48} height={48} alt="social media icon" />
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
            <div className="mt-5 space-y-4">
               <Separator />
               <p className="text-center text-sm">(c)2024 <b>Redxp inc</b>. Todos os direitos reservados.</p>
            </div>
         </div>
         <div className="bg-black py-2 text-white">
            <div className="container flex items-center justify-center gap-3">

               <p>Desevolvido por <b>Reinaldo Vombo</b></p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
