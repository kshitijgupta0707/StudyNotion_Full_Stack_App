import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Signup from './Pages/Signup/Signup'

function App() {

  return (
    //top level div hain yeh
    <div className=' w-screen min-h-screen bg-richblack-900 flex flex-col font-inter ' >
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>

  )
}

export default App
