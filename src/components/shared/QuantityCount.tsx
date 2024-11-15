'use client'
import { useState } from 'react'
import QuantityButton from './QuantityButton'

const QuantityCountButton = () => {
   const [itemCount, setItemCount] = useState(0)
   return <QuantityButton max={20} min={1} onChange={setItemCount} value={itemCount} className='text-xs' />
}

export default QuantityCountButton;
