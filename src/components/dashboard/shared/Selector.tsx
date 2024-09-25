import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select"
import { ControllerRenderProps } from "react-hook-form";

type TSelectProps = {
   placeholder: string;
   className?: string;
   options: {
      id: number;
      name: string;
      value: string;
   }[];
   formField: any
}

const Selector = ({ options, placeholder, className, formField }: TSelectProps) => {
   const onChange = (value: string) => {
      formField.onChange(value)
   }
   return (
      <Select onValueChange={onChange} value={formField.value}>
         <SelectTrigger ref={formField.ref} className={`${className ? className : 'w-[180px]'}`}>
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
