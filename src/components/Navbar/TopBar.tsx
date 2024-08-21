import { HELPE_LINKS, HELPER_LINKS } from "@/constant/site-content"
import Link from "next/link"
import Tooltipy from "../shared/Tooltip"

const TopBar = () => {
   return (
      <div className="bg-black text-white py-3">
         <div className="container flex">
            <div className="flex items-center gap-3 ml-auto">
               {HELPER_LINKS.map((item) => (
                  <div className="" key={item.id}>
                     {item.id === 2 ? (
                        <Tooltipy button={item.name}>
                           <ul className="grid gap-3">
                              {HELPE_LINKS.map((route, i) => (
                                 <li key={i}>
                                    <Link href={'#'}>{route}</Link>
                                 </li>
                              ))}
                           </ul>
                        </Tooltipy>) : (
                        <Link href={item.route}>{item.name}</Link>
                     )}
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
}

export default TopBar
