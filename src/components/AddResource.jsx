import { useState } from "react";

function AddResource({ getItems }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  async function createResource(event) {
    event.preventDefault();
    const BACKEND = import.meta.env.VITE_BACKEND;

    const resource = { title, status };
    const options = {
      method: "POST",
      body: JSON.stringify(resource),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(BACKEND + "/api/resources", options);
    const data = await res.json();
    console.log("Created!", data);
    getItems();
    setTitle("");
    setStatus("");
  }

  function handleTitle(event) {
    setTitle(event.target.value);
  }
  function handleStatus(event) {
    setStatus(event.target.value);
  }

  return (
    <form onSubmit={createResource}>
      <label>
        Title
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitle}
        />
      </label>
      <label>
        Status
        <input
          type="text"
          name="status"
          id="status"
          value={status}
          onChange={handleStatus}
        />
      </label>
      <button type="submit">Send</button>
    </form>
  );
}

export default AddResource;
