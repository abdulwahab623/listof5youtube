import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import Cards from './Cards';
import Sdata from './Sdata';

function ncard(val){
  return(
  <Cards 
     title={val.title}
     sname={val.sname}
     link={val.link}
     />
  );
  }
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <>
      <h1 className='heading_style'>List of 5 youtube mashup</h1>
      {Sdata.map(ncard)}
   </>
  </React.StrictMode>
);

