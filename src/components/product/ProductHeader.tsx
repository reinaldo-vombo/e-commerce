import { Filter } from 'lucide-react'
import Link from 'next/link'

type TProps = {
   quey?: string
   title?: string
}
const ProductHeader = ({ quey = 'all', title = 'Productos' }: TProps) => {
   return (
      <div className='flex items-center justify-between p-2'>
         <h2 className='md:h2-bold'>{title}</h2>
         <div className='flex items-center gap-2'>
            <Link href={`/productos/?status=${quey}`} className='text-sm text-slate-300 md:text-base md:text-black'>Todos productos</Link>
            <button className='hidden md:block'><Filter /></button>
         </div>
      </div>
   )
}

export default ProductHeader
