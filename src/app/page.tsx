'use client';
import { useState, useEffect } from "react";

export default function Home() {
  const [count,                    setCount]                          = useState(0);
        //state variable(getter),  //state updation function(setter)
  
  // variant-1: page re-rendered on each render
  useEffect(() => {
    alert("You clicked " + count + " times");
  });

  // variant-2: Page rendered time (condition based redered)
  useEffect(() => {
    alert("You clicked " + count + " times");
  }, []); // passing dependency array 

  // variant-3: 
  useEffect(() => {
    alert("You clicked " + count + " times");
  }, [count]);

  return (
  <div className="flex flex-col justify-center items-center h-screen">
        <div className="w-[400px] h-[400px] bg-gray-100 rounded-lg relative shadow-lg flex flex-col justify-center items-center">
          <div className="w-[400px] h-[400px] absolute bg-gray-200 -z-10 rounded-lg rotate-6"></div>
    <h1 className="uppercase text-3xl font-bold">counter</h1>
    <div className="flex flex-row gap-4 mt-2">
      <button className="text-2xl" onClick={() => setCount(count + 1)}>+</button>
      <span className="text-2xl">{count}</span>
      <button className="text-2xl" onClick={() => setCount(count - 1)}>-</button>
    </div>
  </div>
  </div>
  );
}
