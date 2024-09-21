'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDropzone, DropzoneRootProps } from 'react-dropzone'
import { TFileUploder } from './type';
import { Images, X } from 'lucide-react';
import { Button } from '../ui/button';

interface CustomFile extends File {
   path?: string;
}
const FileUploader = ({ maxFiles = 1, size = 'large', setPreview }: TFileUploder) => {

   const [files, setFiles] = useState<(File & { preview: string })[]>([]);
   const onDrop = useCallback((acceptedFiles: DropzoneRootProps) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file, {
         preview: URL.createObjectURL(file),
      })));

   }, [])
   setPreview(files)
   const thumbs = files.map(file => {
      const imageSize = files.length > 1 ? 60 : 300;
      return (
         <motion.div className={`inline-flex rounded-md outline-1 outline-[#eaeaea] mb-2 mr-2`}
            key={file.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}>
            <div className={`${maxFiles > 1 ? 'outline outline-slate-200 p-2 w-full rounded-lg flex items-center justify-between ' : 'flex min-w-0'} overflow-hidden relative`}>
               <Image
                  src={file.preview}
                  className='rounded-lg'
                  width={imageSize}
                  height={imageSize}
                  alt={file.name}
                  onLoad={() => { URL.revokeObjectURL(file.preview) }}
               />
               <Button className={`${maxFiles > 1 ? '' : 'absolute top-2 right-2 rounded-full'} size-8 text-white bg-red-500 rounded-md `} onClick={() => setFiles((prev) => prev.filter(f => f.name !== file.name))}>
                  <X /> X
               </Button>
            </div>
         </motion.div>
      )
   });

   useEffect(() => {
      // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
      return () => files.forEach(file => URL.revokeObjectURL(file.preview));
   }, [files]);

   const { getRootProps, getInputProps, isDragActive, fileRejections, acceptedFiles } = useDropzone(
      {
         onDrop, maxFiles: maxFiles, accept: {
            'image/jpeg': [],
            'image/jpg': [],
            'image/png': []
         }
      })
   const acceptedFileItems = acceptedFiles.map((file: CustomFile) => (
      <li key={file.path}>
         {file.path} - {file.size} bytes
      </li>
   ));

   const fileRejectionItems = fileRejections.map(({ file, errors }: { file: CustomFile, errors: any[] }) => (
      <li key={file.path}>
         {file.path} - {file.size} bytes
         <ul>
            {errors.map(e => (
               <li key={e.code}>{e.message}</li>
            ))}
         </ul>
      </li>
   ));
   return (
      <>
         <div className='rounded-lg border-2 cursor-pointer border-black border-dashed p-4 shadow-md space-y-3' {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='flex items-center justify-center'>
               <Images width={50} />
            </div>
            {
               isDragActive ? (
                  <p>Large os ficheiros aqui ...</p>
               ) : (
                  <>
                     <p className='text-center'>
                        <b className='underline'>Clique para carregar</b> ou arrasta e larga <br />
                        Tamanho maximo do ficheiro 50MB
                     </p>
                  </>
               )
            }<div className='text-center'>
               <h4>Rejected files</h4>
               <ul className='text-red-500'>{fileRejectionItems}</ul>
            </div>
         </div>
         <aside className={`${maxFiles > 1 ? 'flex justify-center flex-col gap-3' : 'flex items-center flex-wrap'}`}>
            {thumbs}
         </aside>
      </>
   )
}


export default FileUploader
