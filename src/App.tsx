import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Final from './Pages/Final'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Final/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
