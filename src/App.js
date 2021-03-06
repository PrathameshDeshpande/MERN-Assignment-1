import Card from './components/card';
import Header from './components/header.component';
import Info from './components/info';
import './App.css';
import img1 from "./assests/img1.jpg"
import img2 from "./assests/img2.jpg"
import img3 from "./assests/img3.jpg"
import img4 from "./assests/img4.jpg"
import img5 from "./assests/img5.jpg"
import Tachyons from "tachyons"
import Menu from "./components/menu/Menu"
import Table from './components/Table';
import { useState } from 'react';
import img6 from "./assests/img6.jpg";

function App() {
  const [menuopen,setmenuopen]=useState(false)
  return (
<div>
  <div>
  <Header open={menuopen} setopen={setmenuopen}/>
  <Menu open={menuopen} setopen={setmenuopen}/>
  </div>
  <div>
        <br />
        <br />
        <br />
        <br />
        <br />
  </div>
  <div className='card-f'>
  <div className='big tc'> <Card img={img1} /></div>
  <div className='small'>
    <Card img={img2}/>
  <Card img={img3}/>
  <Card img={img4}/>
  <Card img={img5}/>
  </div>
</div>
<Info/>
<Table/>
<img src={img6} alt='img'/>
</div>
  );
}

export default App;