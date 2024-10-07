'use client'
import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useDropzone, DropzoneRootProps } from 'react-dropzone'
import { TFileUploder } from './type';
import { Images, X } from 'lucide-react';
import { Button } from '../ui/button';
import MultipleImage from '../dashboard/file-upload/MultipleImage';
import SingleImage from '../dashboard/file-upload/SingleImage';

interface CustomFile extends File {
   path?: string;
}
const FileUploader = ({ maxFiles = 1, size = 'large', formField }: TFileUploder) => {

   const [files, setFiles] = useState<(File & { preview: string })[]>([]);

   const onDrop = useCallback((acceptedFiles: DropzoneRootProps) => {
      const newFiles = (acceptedFiles.map((file: File) => Object.assign(file, {
         preview: URL.createObjectURL(file),
      })));
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles)
      formField.onChange(updatedFiles)

   }, [formField, files])

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
         <div className='rounded-lg border-2 cursor-pointer border-black border-dashed p-4 pace-y-3' {...getRootProps()}>
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
            {files.length > 1 && (
               <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
               >
                  <MultipleImage setFiles={setFiles} files={files} />
               </motion.div>
            )}
            {maxFiles === 1 && files.length > 0 && <SingleImage setFiles={setFiles} file={files[0]} />}
         </aside>
      </>
   )
}


export default FileUploader
