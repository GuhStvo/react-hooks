import { useEffect, useState } from "react";

export function UseState2() {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, [resourceType]);

  const changeResourceType = (resourceType) => {
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
          onClick={() => changeResourceType("pomments")}
        >
          Comments
        </button>
        <button
          className="p-1 border border-gray-300 rounded-md"
          onClick={() => changeResourceType("podos")}
        >
          Todos
        </button>
      </div>
    </div>
  );
}
