import PurchaseTab from '../bottomNav/PurchaseTab';
import { TProduct } from '@/components/product/type';
import MobileProductPreview from '../MobileProductPreview';
import { Dispatch, SetStateAction } from 'react';
import SigleProductInfo from '../SigleProductInfo';
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
         <ScrollArea className='h-[900px]'>
            <MobileProductPreview
               image={product.image}
               price={product.price}
               title={product.title}
               brand={product.brand}
               images={product.images}
               setSelectedId={setSelectedId} />
            <SigleProductInfo product={product} />
         </ScrollArea>
         <PurchaseTab />
      </section>
   )
}

export default MobileSingleProduct;
