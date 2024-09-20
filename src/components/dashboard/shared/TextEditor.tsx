'use client'
import { useState } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import dynamic from 'next/dynamic';
const FroalaEditorComponent = dynamic(
   () => import('react-froala-wysiwyg'),
   { ssr: false }
);

const TextEditor = () => {
   const [model, setModel] = useState("Example Set");

   const handleModelChange = (event: any) => {
      setModel(event)
   }

   return (
      <FroalaEditorComponent
         tag='textarea'
         config={{
            heightMin: 400
         }}
         onModelChange={handleModelChange} />
   )
}

export default TextEditor
