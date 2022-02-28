import React from 'react'
import "./menu.scss";

export default function Menu({open,setopen}) {
  return (
    <div className={"menu " + (open && 'active')}>
      <ul>
          <li onClick={()=>setopen(!open)}>
              <a  href="https://www.srmist.edu.in/placement/">Home</a>
          </li>
          
          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/overview">Career Center</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/">Placement</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/recruiters">Recruiters</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/dream/offers">Super Dream and Dream Offers</a>
          </li>

          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/about-cdc">CDC</a>
          </li>
          <li onClick={()=>setopen(!open)}>
              <a href="https://www.srmist.edu.in/placement/contacts">Contact</a>
          </li>
      </ul>
    </div>
  )
}
