import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { Button } from '../ui/button'

type TEmpty = {
   onChange: Dispatch<SetStateAction<boolean>>
}

const EmptyList = ({ onChange }: TEmpty) => {
   return (
      <div className="text-center space-y-6 flex flex-col items-center justify-center">
         <Image src='/shopping-cart.png' className="size-20" width={368} height={465} alt="shopping cart" />
         <h3 className="h3-bold">O seu carrinho está vazio</h3>
         <p>Não tem nemum item no teu carrinho <br /> vamos compar alguma coisa</p>
         <Button type='button' onClick={() => onChange(false)} className="bg-alpha">Continuar as compras</Button>
      </div>
   )
}

export default EmptyList
