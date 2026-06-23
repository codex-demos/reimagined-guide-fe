import React, { useEffect, useState } from "react";

function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  async function getItems() {
    try {
      const BACKEND = import.meta.env.VITE_BACKEND;

      const res = await fetch(BACKEND + "/api/resources");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      setError(error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  if(loading){
    return (
      <h1>Loading...</h1>
    )
  }

  if(error){
    return (
      <h1>Something went wrong. :(</h1>
    )
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Items;
