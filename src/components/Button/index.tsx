import { useState, useEffect } from 'react';

export default function GDSEButton(props) {

  const [color, setColor] = useState("white")
  const click = btnColor => {
    let color;
    if (btnColor == "bg-pink-400"){
      color = "rgb(249 168 212)"
    }if (btnColor == "bg-fuchsia-500"){
      color = "rgb(232 121 249)"
    }if (btnColor == "bg-emerald-400"){
      color = "rgb(110 231 183)"
    }
    setColor(color)
  }
  /* This is where we actually change background color */
  useEffect(() => { document.body.style.backgroundColor = color }, [color])

  return (
    // <button onClick = {
    //   () => click(props.btnColor)
    // } className={`${props.btnColor} ${props.hoverColor} ${props.btnposition} text-white font-bold py-2.5 px-5 rounded m-8 p-8`}>
    //  {props.btnName}
    // </button>
    <button className={`${props.btnColor} ${props.hoverColor} ${props.btnposition} text-white font-bold py-2.5 px-5 rounded m-8 p-8`}>
     {props.btnName}
    </button>
  );
}

