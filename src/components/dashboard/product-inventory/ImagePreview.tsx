import Selector from '@/components/shared/Selector'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
type TPreview = {
   preview: (File & {
      preview: string;
   })[]
}

const PRODUCT_STATE = [
   'Publicado',
   'Não Publicado'
]

const ImagePreview = ({ preview }: TPreview) => {
   return (
      <div className='grid gap-4 col-span-4 h-[21rem] sticky top-0'>
         <Card>
            <CardHeader>
               <CardTitle>Thumbnail</CardTitle>
               <Separator />
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
               {preview.length > 0 ? preview.map((image) => (
                  <Image src={image.preview} width={200} height={200} key={image.name} alt={image.name} />
               )) : <Image src={'/shoe-icon.png'} width={200} height={200} alt='product preview' />}

            </CardContent>
         </Card>
         <Card className='h-[15rem]'>
            <CardHeader>
               <CardTitle className='flex items-center justify-between'>Stado
                  <span className={`size-6 rounded-full bg-green-500`} />
               </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
               <Selector placeholder='Stado' options={PRODUCT_STATE} className='w-full' />
            </CardContent>
         </Card>
      </div>
   )
}

export default ImagePreview
