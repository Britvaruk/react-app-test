import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Регистрация</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Кликер {count}
        </button>
      </div>
    </>
  )
}

export default App
