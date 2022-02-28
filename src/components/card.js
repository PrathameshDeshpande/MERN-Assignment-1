import React from 'react'
import Tachyons from "tachyons"

export default function Card(props) {
  return (
    <div className='card-item'>
     <img src={props.img} alt="logo" className=""/>
    </div>
  )
}
