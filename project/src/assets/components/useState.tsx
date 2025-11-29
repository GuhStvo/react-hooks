import { useState } from "react";

export function UseState() {
  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    setCount((prevState) => prevState + 1);
  };
  const decrementHandle = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-200">
      <div className="w-md h-[250px] flex flex-col items-center justify-center gap-1.5 bg-blue-300 rounded-2xl">
        <button className="bg-white p-2.5 rounded-full font-semibold cursor-pointer hover:bg-blue-100 active:scale-[0.98]" onClick={incrementHandle}>INCREMENTAR</button>
        <h2>{count}</h2>
        <button className="bg-white p-2.5 rounded-full font-semibold cursor-pointer hover:bg-blue-100 active:scale-[0.98]" onClick={decrementHandle}>DECREMENTAR</button>
      </div>
    </div>
  );
}
