import { useEffect, useState } from "react";
import "./App.css";
import Items from "./components/Items";

function App() {
  const [health, setHealth] = useState("");

  async function getHealth() {
    const BACKEND_URL = import.meta.env.VITE_BACKEND;
    const res = await fetch(BACKEND_URL + "/health");
    const { healthy } = await res.json();
    setHealth(healthy);
  }

  useEffect(() => {
    getHealth();
  }, []);

  if (!health) {
    return <p>Something went wrong.</p>;
  }

  return (
    <>
      <h1>{health && "Welcome!"}</h1>
      {health && <Items />}
    </>
  );
}

export default App;
