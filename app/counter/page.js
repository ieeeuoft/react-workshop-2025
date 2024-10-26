"use client";
import { useState } from "react";
import Link from "next/link";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div className="h-screen w-screen flex bg-pink-400 justify-center items-center relative">
      <Link href="/" className="absolute top-0 left-0 m-4 p-2 border-2">Back</Link>
      
      <div>
        <h1 className="text-5xl flex justify-center">This is a Counter!!!</h1>
        <h1 className="flex justify-center text-9xl m-6">{count}</h1>

        <div className="flex justify-center">
          <button className="border-2 p-2 m-2" onClick={increase}>Increase</button>
          <button className="border-2 p-2 m-2" onClick={() => setCount(count - 1)}>Decrease</button>
          <button className="border-2 p-2 m-2" onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}
