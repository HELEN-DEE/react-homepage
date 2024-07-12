import React, { useState } from "react";

export default function Counter() {
  // React Hook: useState
  const [count, setCount] = useState(0)


  const increaseCount = () => {
    setCount(prevCount => prevCount+1)
    
  }

  const decreaseCount = () =>
  {
    if (count <= 0) return
    else 
    {
        setCount(prevCount => prevCount-1)
    }
  }

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="bg-slate-600 w-36 h-36 rounded-full flex items-center justify-center text-white text-6xl">
          {count}
        </div>
        <button className="bg-red-500 text-white absolute -bottom-5 -left-4 text-2xl rounded-full w-14 h-14" onClick={decreaseCount}>
          -
        </button>
        <button className="bg-green-500 text-white absolute -bottom-5 -right-4 text-2xl rounded-full w-14 h-14" onClick={increaseCount}>
          +
        </button>
      </div>
    </div>
  );
}