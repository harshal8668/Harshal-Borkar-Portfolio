import React from 'react'
// import { Link } from "react-router-dom";


export default function Icon(props) {
  return (
    <div >
        <img src={props.iconImg} alt={props.iconAlt} className={props.className}/>
    </div>
  )
}
