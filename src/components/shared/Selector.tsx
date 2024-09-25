import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { TSelect } from "./type"

const Selector = ({ options, placeholder, className, disabled, onValueChange, value }: TSelect) => {
   return (
      <Select name="category" value={value} disabled={disabled} onValueChange={onValueChange}>
         <SelectTrigger className={`${className ? className : 'w-[180px]'}`}>
            <SelectValue placeholder={placeholder} />
         </SelectTrigger>
         <SelectContent>
            {options.map((item,) => (
               <SelectItem value={item.value} key={item.id}>{item.name}</SelectItem>
            ))}
         </SelectContent>
      </Select>

   )
}

export default Selector
