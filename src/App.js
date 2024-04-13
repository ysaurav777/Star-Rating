import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './App.scss';

const App = ({numStar=5}) => {
  const [rate,setrate]=useState(0);
  const [hov,sethov]=useState(0);

  function onClickStar(onindex) {
    setrate(onindex);
    console.log(rate);
  }

  function MouseMove(onindex) {
    sethov(onindex);
    console.log(hov);
  }

  function MouseDown(onindex) {
    sethov(rate);
    console.log(hov);
  }

  return (
    <div>
      {
        [...Array(numStar)].map((_,index)=>{
          index+=1;
          return <FaStar
          key={index}
          className={index<=(hover||rate)?'active':'inactive'}
          onClick={()=>onClickStar(index)}
          onMouseMove={()=>MouseMove(index)}
          onMouseDown={()=>MouseDown(index)}
          size={30}/>
        })
      }
    </div>
  )
}

export default App;