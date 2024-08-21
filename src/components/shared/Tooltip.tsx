import {
   Tooltip,
   TooltipContent,
   TooltipProvider,
   TooltipTrigger,
} from "@/components/ui/tooltip"
import { TPoolTip } from "./type"


const Tooltipy = ({ button, children }: TPoolTip) => {
   return (
      <TooltipProvider>
         <Tooltip>
            <TooltipTrigger>{button}</TooltipTrigger>
            <TooltipContent>
               {children}
            </TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}

export default Tooltipy
