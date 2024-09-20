import FileUploader from "@/components/shared/FileUploader"
import Modal from "@/components/shared/Modal"
import Image from "next/image"


const ProductMedia = () => {
   return (
      <div className="col-span-4 space-y-2">
         <FileUploader maxFiles={1} />
         <div>
            <h2>Adicionar cores</h2>
            <Modal btn={<ModalButton />} title="Uplode das imagem">
               <FileUploader maxFiles={7} />
            </Modal>
         </div>
      </div>
   )
}
const ModalButton = () => {
   return (
      <div className="flex items-center justify-between rounded-md shadow-md">
         <Image src='/shoe-icon.png' width={30} height={30} alt="shoe icon" />
         <p>Images de previsualização</p>
      </div>
   )
}


export default ProductMedia
