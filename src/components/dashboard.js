import React, {useState} from 'react'  

import ChartPage from './chartPage';
import GraphPage from './graphPage';
import TablePage from './tablePage';
import SliderImages from './sliderImages';

import '../styles/dashboard.css'
export default function Dashboard() { 
  
    const [active, setActive] = useState("Zero");
  
    return (      
    <div className="App d-flex">
      <div className='leftNavBar'>
      <ul className='ul-navLinks'>
        <li onClick={ () => setActive("Zero")}>Dashboard</li>
        <li onClick={ () => setActive("First")}>Charts</li>
        <li onClick={ () => setActive("Second")}>Graphs</li>
        <li onClick={ () => setActive("Third")}>Tables</li>
      </ul>
    </div>
    <div className='rightPanel'>      
      {active === "Zero" && <SliderImages/>} 
      {active === "First" && <ChartPage/>}      
      {active === "Second" && <GraphPage/>}         
      {active === "Third" && <TablePage/>}
    </div>
  </div>
    );
}  
