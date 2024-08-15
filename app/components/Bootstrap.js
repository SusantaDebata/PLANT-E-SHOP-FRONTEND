'use client';

import { useEffect } from "react";


const Bootstrap = () => {
     useEffect(()=>{
          import('/node_modules/bootstrap/dist/js/bootstrap.bundle.js');
     },[]);
  return (
    null
  )
}

export default Bootstrap
