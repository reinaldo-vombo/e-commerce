'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDropzone, DropzoneRootProps } from 'react-dropzone'
import { TFileUploder } from './type';
import { Images } from 'lucide-react';

interface CustomFile extends File {
   path?: string;
}
const FileUploader = ({ maxFiles = 1, size = 'large' }: TFileUploder) => {

   const [files, setFiles] = useState<(File & { preview: string })[]>([]);
   const onDrop = useCallback((acceptedFiles: DropzoneRootProps) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file, {
         preview: URL.createObjectURL(file)
      })));
   }, [])
   const thumbs = files.map(file => (
      <motion.div className={`inline-flex rounded-md outline-1 outline-[#eaeaea] mb-2 mr-2 ${getSize(size)}`}
         key={file.name}
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.3 }}>
         <div className='flex min-w-0 overflow-hidden'>
            <Image
               src={file.preview}
               width={300}
               height={300}
               alt={file.name}
               // Revoke data uri after image is loaded
               onLoad={() => { URL.revokeObjectURL(file.preview) }}
            />
         </div>
      </motion.div>
   ));

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
      <div className='rounded-lg border-2 border-black border-dashed p-4 shadow-md space-y-3' {...getRootProps()}>
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
            <h4>Ficheiros aceitos</h4>
            <ul>{acceptedFileItems}</ul>
            <h4>Rejected files</h4>
            <ul className='text-red-500'>{fileRejectionItems}</ul>
         </div>
         <aside className='flex flex-row flex-wrap mt-4'>
            {thumbs}
         </aside>
      </div>
   )
}
const getSize = (size: 'small' | 'medium' | 'large') => {
   switch (size) {
      case 'small':
         return 'w-20 h-20';
      case 'medium':
         return 'w-40 h-40';
      case 'large':
         return 'w-60 h-60';
      default:
         return 'w-40 h-40';
   }
};

export default FileUploader
