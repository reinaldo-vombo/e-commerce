'use client'
import {
   Card,
   CardContent,
} from "@/components/ui/card"
import { ReactNode } from "react"
type TCardProps = {
   children: ReactNode
   className?: string
}

const CardBody = ({ children, className }: TCardProps) => {
   return (
      <Card>
         <CardContent className={className}>
            {children}
         </CardContent>
      </Card>

   )
}

export default CardBody
