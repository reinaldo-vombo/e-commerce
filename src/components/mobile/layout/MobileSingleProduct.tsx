import PurchaseTab from '../bottomNav/PurchaseTab';
import { TProduct } from '@/components/product/type';
import MobileProductPreview from '../MobileProductPreview';
import { Dispatch, SetStateAction } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
type TSigleProduct = {
   products: TProduct[];
   productId: string | null;
   setSelectedId: Dispatch<SetStateAction<string | null>>
}

const MobileSingleProduct = ({ products, productId, setSelectedId }: TSigleProduct) => {
   const product = products.find(item => item.id === productId)
   if (!product) {
      return 'loading'
   }
   return (
      <section className='sm:block w-full h-full space-y-4'>
         <MobileProductPreview
            props={product}
            setSelectedId={setSelectedId} />
         <PurchaseTab />
      </section>
   )
}

export default MobileSingleProduct;
