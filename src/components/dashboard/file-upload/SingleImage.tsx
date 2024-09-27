import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
type TProps = {
   file: any
   setFiles: React.Dispatch<React.SetStateAction<(File & {
      preview: string;
   })[]>>
}

const SingleImage = ({ file, setFiles }: TProps) => {
   return (
      <motion.div className='inline-flex rounded-md outline-1 outline-[#eaeaea] mb-2 mr-2'
         key={file.name}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.3 }}>
         <div className='flex min-w-0 overflow-hidden relative'>
            <Image
               src={file.preview}
               className='rounded-lg'
               width={300}
               height={300}
               alt={file.name}
               onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
            <Button className='absolute top-2 right-2 rounded-full size-8 text-white bg-red-500' onClick={() => setFiles((prev) => prev.filter(f => f.name !== file.name))}>
               <X /> X
            </Button>
         </div>
      </motion.div>
   )
}

export default SingleImage
