import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { X } from 'lucide-react'
import React from 'react'

const MultiStepForm = ({ fields, remove, append, register }: any) => {
   return (
      <div>
         <Label>Categories</Label>
         {fields.map((field, index) => (
            <div key={field.id} className="flex items-center space-x-2 mt-2">
               <Input {...register(`categories.${index}.value` as const)} />
               <Button type="button" variant="outline" size="icon" onClick={() => remove(index)}>
                  <X className="h-4 w-4" />
               </Button>
            </div>
         ))}
         <Button type="button" variant="outline" className="mt-2" onClick={() => append({ value: "" })}>
            Add Category
         </Button>
      </div>
   )
}

export default MultiStepForm
