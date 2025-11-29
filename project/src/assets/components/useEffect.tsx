import { useEffect, useState } from "react"

export function UseEffect() {

    const [count, setCount] = useState(0);

    const incrementHandle = () =>{
        setCount((setPrevent) => setPrevent + 1);
    }
    const decrementHandle = () =>{
        setCount((setPrevent) => setPrevent - 1);
    }

    // Exemplo de uso so useEffect
    const [cor, setCor] = useState("text-back");
    useEffect(() => {
        setCor(
        count < 0
          ? "text-red-600"
          : count > 0
          ? "text-blue-600"
          : "text-black"
  );
    }, [count])

    return (
        <div className="p-4">
            <button onClick={incrementHandle}>INCREMENTAR</button>
            <h2 className={cor}>{count}</h2>
            <button onClick={decrementHandle}>DECREMENTAR</button>
        </div>
    )
}