import Selector from '@/components/shared/Selector'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
type TPreview = {
   preview: string
}

const PRODUCT_STATE = [
   'Publicado',
   'Não Publicado'
]

const ImagePreview = ({ preview }: TPreview) => {
   return (
      <div className='grid col-span-4'>
         <Card className='h-[21rem]'>
            <CardHeader>
               <CardTitle>Thumbnail</CardTitle>
               <Separator />
            </CardHeader>
            <CardContent>
               <Image src={preview ? preview : '/shoe-icon.png'} width={100} height={100} alt='product preview' />
            </CardContent>
         </Card>
         <Card className='h-[21rem]'>
            <CardHeader className='flex items-center justify-between'>
               <CardTitle>Stado</CardTitle>
               <span className={`size-6 rounded-full bg-green-500`}></span>
            </CardHeader>
            <Separator />
            <CardContent>
               <Selector placeholder='Stado' options={PRODUCT_STATE} />
            </CardContent>
         </Card>
      </div>
   )
}

export default ImagePreview
