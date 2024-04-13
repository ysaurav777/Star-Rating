import React from 'react';
import {FaStar} from 'react-icons/fa';

const App = ({numStar=5}) => {
  function onClickStar(onindex) {
    console.log(onindex);
  }

  function MouseMove() {

  }

  function MouseDown() {

  }

  return (
    <div>
      {
        [...Array(numStar)].map((_,index)=>{
          index+=1;
          return <FaStar
          key={index}
          onClick={()=>onClickStar(index)}
          onMouseMove={()=>MouseMove()}
          onMouseDown={()=>MouseDown()}
          size={30}/>
        })
      }
    </div>
  )
}

export default App;