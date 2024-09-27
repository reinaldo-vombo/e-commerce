
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Selector from '../shared/Selector'

const PRODUCT_STATE = [
   { id: 1, name: 'Publicado', value: 'Publicado' },
   { id: 2, name: 'Não Publicado', value: 'Não Publicado' },
]

const ImagePreview = ({ formField }: any) => {
   return (
      <div className='grid gap-4'>
         <Card>
            <CardHeader>
               <CardTitle>Thumbnail</CardTitle>
               <Separator />
            </CardHeader>
            <CardContent className='flex items-center justify-center'>
               <Image src={'/shoe-icon.png'} width={200} height={200} alt='product preview' />
            </CardContent>
         </Card>
         <Card className='h-[15rem]'>
            <CardHeader>
               <CardTitle className='flex items-center justify-between'>Stado
                  <span className={`size-6 rounded-full ${formField.value === 'Publicado' ? 'bg-green-500' : 'bg-red-500'}`} />
               </CardTitle>
            </CardHeader>
            <Separator />
            <CardContent>
               <Selector placeholder='Stado' options={PRODUCT_STATE} formField={formField} className='w-full' />
            </CardContent>
         </Card>
      </div>
   )
}

export default ImagePreview
