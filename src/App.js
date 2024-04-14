import React, { useState } from 'react';
import {FaStar} from "react-icons/fa"
import './App.scss';

const App = ({numstat=10}) => {
  const [rate,setrate]=useState(0);
  const [hover,sethover]=useState(0);

  function clickstar(index) {
    setrate(index);
    console.log(index);
  }
  function upstar(index) {
    sethover(index);
    console.log(index);
  }
  function downstar() {
    sethover(rate);
  }

  return (
    <div className='star-rating'>
      {
        [...Array(numstat)].map((_,index)=>{
          index+=1;
          return (<FaStar
          key={index}
          className={index<=(hover||rate)?'active':'inactive'}
          onClick={()=>clickstar(index)}
          onMouseMove={()=>upstar(index)}
          onMouseLeave={()=>downstar()}
          size={40}/>);
        })
      }
    </div>
  )
}

export default App;