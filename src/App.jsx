import { Routes,Route } from 'react-router-dom'
import './App.css'
import Register from './Pages/Register/Register'
import Info from './Pages/Info/Info'

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<Register />} />
        <Route path='/register' element={<Register />} />
        <Route path='/Info' element={<Info />} />
      </Routes>
    </>
  )
}

export default App
