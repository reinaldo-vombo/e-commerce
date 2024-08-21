import { CUMPONY_LINKS, HELPE_LINKS, HELPER_LINKS, RESUCES_LINKS } from "@/constant/site-content"
import { Logo } from "@/constant/svgIcons"
import Link from "next/link"

const Footer = () => {
   return (
      <footer>
         <div className="container py-16">
            <div className="grid grid-cols-12 gap-4">
               <div className="col-span-3 space-y-7">
                  <h2 className="font-bold text-lg">Recursos</h2>
                  <ul className="space-y-3 text-slate-800 font-medium">
                     {RESUCES_LINKS.map((item) => (
                        <li key={item.id}>
                           <Link href={item.route}>{item.name}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-span-3 space-y-7">
                  <h2 className="font-bold text-lg">Ajuda</h2>
                  <ul className="space-y-3 text-slate-800 font-medium">
                     {HELPE_LINKS.map((item, i) => (
                        <li key={i}>
                           <Link href={'#'}>{item}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-span-3 space-y-7">
                  <h2 className="font-bold text-lg">Empresa</h2>
                  <ul className="space-y-3 text-slate-800 font-medium">
                     {CUMPONY_LINKS.map((item) => (
                        <li key={item.id}>
                           <Link href={item.route}>{item.name}</Link>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="col-span-3 space-y-7">
                  <Logo width={50} height={50} />
               </div>
            </div>
         </div>
         <div className="bg-black py-2 text-white">
            <div className="container flex items-center justify-center gap-3">
               <p>(c)2024 <b>Redxp inc</b>. Todos os direitos reservados.</p>
               <p>Desevolvido por <b>Reinaldo Vombo</b></p>
            </div>
         </div>
      </footer>
   )
}

export default Footer
