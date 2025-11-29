import { useEffect, useState, type SetStateAction } from "react";

export function UseState2() {
  type Item = {
    id: string;
    title: string;
  };

  const [resourceType, setResourceType] = useState<string>("posts");
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    // Função async: permite usar 'await' dentro dela e faz o código esperar a resposta de operações assíncronas (como fetch) antes de continuar.
    const fetchResurceTypes = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${resourceType}`
      );
      const responseJSON = await response.json();
      setItems(responseJSON);
      // console.log(responseJSON)
    };

    fetchResurceTypes();
  }, [resourceType]);

useEffect(() => {
  // Executa SOMENTE quando o componente é montado na tela (equivalente ao antigo componentDidMount)
  console.log("componentDidMount");

  return () => {
    // Executa quando o componente é desmontado (removido da tela)(equivalente ao antigo componentWillUnmount)
    console.log("componentWillUnmount");
  };
}, []); // Array vazio: o efeito só roda 1 vez, quando monta


  const changeResourceType = (resourceType: SetStateAction<string>) => {
    setResourceType(resourceType);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl">{resourceType}</h1>
      <div className="flex gap-2.5 mt-5">
        <button
          className="p-1 border border-gray-300 rounded-md"
          onClick={() => changeResourceType("posts")}
        >
          Posts
        </button>
        <button
          className="p-1 border border-gray-300 rounded-md"
          onClick={() => changeResourceType("comments")}
        >
          Comments
        </button>
        <button
          className="p-1 border border-gray-300 rounded-md"
          onClick={() => changeResourceType("todos")}
        >
          Todos
        </button>
      </div>
      <div className="flex flex-col mt-4 gap-2.5">
        {items.map((item) => (
          <p className="p-3.5 border border-gray-300 rounded-md" key={item.id}>
            {item.title}
          </p>
        ))}
      </div>
    </div>
  );
}
