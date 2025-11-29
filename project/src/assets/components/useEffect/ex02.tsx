// Exercício 02 - Atualizar o título da página
import { useState, useEffect, useDebugValue } from "react";

export function EffectEx02() {
  const [count, setCount] = useState(0);

  const incrementHandle = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
  }, [count]);

  return (
    <div className="p-4">
      <button onClick={incrementHandle} className="w-[200px] bg-amber-200">
        +1
      </button>
      <h1 className="p-4 text-5xl">Você clicou {count} vezes</h1>
    </div>
  );
}
