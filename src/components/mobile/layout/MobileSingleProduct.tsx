import PurchaseTab from '../bottomNav/PurchaseTab';
import { TProduct } from '@/components/product/type';
import MobileProductPreview from '../MobileProductPreview';
import { Dispatch, SetStateAction } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
type TSigleProduct = {
   products: TProduct[];
   productId: string;
   setSelectedId: Dispatch<SetStateAction<string | null>>
}

const MobileSingleProduct = ({ products, productId, setSelectedId }: TSigleProduct) => {
   const product = products.find(item => item.id === productId)
   if (!product) {
      return 'loading'
   }
   return (
      <section className='sm:block w-full h-full space-y-4'>
         <ScrollArea className='h-[1011px]'>
            <MobileProductPreview
               props={product}
               setSelectedId={setSelectedId} />
            <PurchaseTab />
         </ScrollArea>
      </section>
   )
}

export default MobileSingleProduct;
