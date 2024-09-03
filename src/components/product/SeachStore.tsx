'use client'

import { Icons } from "@/constant/icons"
import { Input } from "../ui/input"
import Map from "../shared/Map"

const SeachStore = () => {
   const location = false
   return (
      <div className="space-y-5">
         <div className="relative mt-8">
            <Input className="pl-8" placeholder="Pesquisar localização" type="search" />
            <Icons.mapPin className="text-slate-300 absolute top-3 right-3" width={20} />
            <Icons.search className="text-slate-300 absolute top-3 left-3" width={20} />
         </div>
         <div className="h-60">
            {location ? <Map /> : (
               <div className="space-y-3">
                  <h2 className="base-semibold">Não exitem lojas Repxp disponíveis</h2>
                  <p className="text-slate-600">Não foi possivel encontrar lojas Redxp num raio 50 km</p>
               </div>
            )}
         </div>
      </div>
   )
}

export default SeachStore
