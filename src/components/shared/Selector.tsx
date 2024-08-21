import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { TSelect } from "./type"

const Selector = ({ options, placeholder, className }: TSelect) => {
   return (
      <Select>
         <SelectTrigger className={`${className ? className : 'w-[180px]'}`}>
            <SelectValue placeholder={placeholder} />
         </SelectTrigger>
         <SelectContent>
            {options.map((item, i) => (
               <SelectItem value={item} key={i}>{item}</SelectItem>
            ))}
         </SelectContent>
      </Select>

   )
}

export default Selector
