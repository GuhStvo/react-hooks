// EXERCÍCIO 3 — Buscar dados de uma API
import { useEffect, useState } from "react";

export function UseEffect03() {
  type Item = {
    id: number;
    name: string;
  };

  const [resource, setResource] = useState<string>("character");
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const fetchResurceTypes = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/${resource}`
      );
      const responseJSON = await response.json();
      // Vai pegar a resposta que vai voltar do endpoint
      setItems(responseJSON.results);
      console.log(responseJSON.results);
    };

    fetchResurceTypes();
  }, [resource]);

  const swapResources = (prev: string) => {
    setResource(prev);
  };

  return (
    <div className="p-4 bg-gray-200">
      <h1 className="text-4xl">{resource}</h1>
      <div className="flex gap-2.5 items-center mt-4 mb-4 bg-gray-1 p-2">
        <button
          className="bg-gray-500 text-white p-2 rounded-full font-semi cursor-pointer active:scale-95"
          onClick={() => swapResources("character")}
        >
          character
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded-full font-semi cursor-pointer active:scale-95"
          onClick={() => swapResources("location")}
        >
          location
        </button>
        <button
          className="bg-gray-500 text-white p-2 rounded-full font-semi cursor-pointer active:scale-95"
          onClick={() => swapResources("episode")}
        >
          episode
        </button>
      </div>
      <div className="bg-gray-600 flex flex-col gap-4 border p-2">
        {items.map((item) => (
          <p className="p-2 rounded-lg text-white bg-gray-500" key={item.id}>{item.name}</p>
        ))}
      </div>
    </div>
  );
}
