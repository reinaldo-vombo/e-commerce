'use client'
import { useEffect, useState } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import dynamic from 'next/dynamic';
import { ControllerRenderProps } from 'react-hook-form';
import { AnyNsRecord } from 'dns';

const FroalaEditorComponent = dynamic(
   () => import('react-froala-wysiwyg'),
   { ssr: false }
);
type TEditorProps = {
   formField?: any
}

const TextEditor = ({ formField }: TEditorProps) => {

   const [model, setModel] = useState('');
   const handleChange = (value: string) => {
      setModel(value)
      formField.onChange(value)
   }

   return (
      <FroalaEditorComponent
         tag='textarea'
         config={{
            PlaceholderText: "Escreva algo",
            heightMin: 200,
            events: {
               // contentChanged: function () {
               //    const text = this.html.get()
               //    console.log(text);

               // }
            }
         }}
         model={model}
         onModelChange={handleChange} />
   )
}

export default TextEditor
