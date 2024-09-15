import { Button } from '@/components/ui/button'
import { Download, Loader } from 'lucide-react'
import { useCallback } from 'react'
import { saveAs as FileSaver } from 'file-saver'

type TProps = {
   fileName: string
   isLoading: boolean
   getPng: () => Promise<string | undefined>
}


const DowloadToPngButton = ({ fileName, isLoading, getPng }: TProps) => {
   const handleDownload = useCallback(async () => {
      const png = await getPng();

      // Verify that png is not undefined
      if (png) {
         // Download with FileSaver
         FileSaver.saveAs(png, `${fileName}.png`);
      }
   }, [getPng, fileName]);
   return (
      <Button className='bg-transparent border border-slate-200 disabled:bg-gray-400/5' onClick={handleDownload} disabled={isLoading}>
         {isLoading ? <Loader className='text-slate-400 animate-spin' /> : <Download className='text-slate-400' />}
      </Button>
   )
}

export default DowloadToPngButton
