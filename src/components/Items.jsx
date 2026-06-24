import React, { useEffect, useState } from "react";

function Items({items, getItems}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  // removed items state from here
  // getItems items function
  useEffect(() => {
    getItems();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Something went wrong. :(</h1>;
  }

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.id}</p>
          <h2>{item.title}</h2>
          <p>{item.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Items;
