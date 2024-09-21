import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { TSelect } from "./type"

const Selector = ({ options, placeholder, className, name, disabled }: TSelect) => {
   return (
      <Select disabled={disabled}>
         <SelectTrigger className={`${className ? className : 'w-[180px]'}`}>
            <SelectValue placeholder={placeholder} />
         </SelectTrigger>
         <SelectContent>
            {options.map((item, i) => (
               <>
                  <input type="hidden" name={name} value={item} />
                  <SelectItem value={item} key={i}>{item}</SelectItem>
               </>
            ))}
         </SelectContent>
      </Select>

   )
}

export default Selector
