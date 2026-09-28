import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Concepts from './Concepts'
import History from './History'
import Advantages from './Advantages'
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/history" element={<History />} />
        <Route path="/advantages" element={<Advantages />} />
      </Routes>
    </>
  )
}

export default App