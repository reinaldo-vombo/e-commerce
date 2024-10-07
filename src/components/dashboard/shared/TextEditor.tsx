'use client'
import { useState } from 'react';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import dynamic from 'next/dynamic';

const FroalaEditorComponent = dynamic(
   () => import('react-froala-wysiwyg'),
   { ssr: false }
);
type TEditorProps = {
   formField?: any;
   heigh?: number
}

const TextEditor = ({ formField, heigh = 200 }: TEditorProps) => {

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
            heightMin: heigh,
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
