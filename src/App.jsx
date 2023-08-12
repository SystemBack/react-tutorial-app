import Navbar from './components/Navbar'
import './App.css'
import Events from './components/Events'
import { useState, useRef } from 'react'
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const containerRef = useRef()
  const handleNavbarSearch = (term) => {
    console.log(containerRef.current)
    setSearchTerm(term)
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </>
  )
}

export default App
