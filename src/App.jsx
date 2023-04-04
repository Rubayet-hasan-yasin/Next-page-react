import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { Outlet } from 'react-router-dom'
import Header from './conponents/Header/Header'
import Footer from './conponents/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}

export default App
