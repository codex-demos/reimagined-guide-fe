import { useEffect, useState } from 'react'
import './App.css'
import Items from './components/Items';

function App() {
  const [health, setHealth] = useState("")
  async function getHealth(){
  try {
    const BACKEND = import.meta.env.VITE_BACKEND;
    const res = await fetch(BACKEND);
    const data = await res.json()
    setHealth(data.message)
  } catch (error) {

  }
 }

  useEffect(()=>{
    getHealth()
  }, [])
  return (
    <>
     <h1>{health}</h1>
     <Items/>
    </>
  )
}

export default App
