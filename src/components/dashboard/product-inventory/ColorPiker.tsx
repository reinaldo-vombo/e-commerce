'use client'
import React, { useState } from 'react'
import { HexColorPicker } from "react-colorful";

const ColorPiker = () => {
   const [color, setColor] = useState("#aabbcc");
   return <HexColorPicker color={color} onChange={setColor} />;
}

export default ColorPiker
