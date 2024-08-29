import { useState } from 'react'

import './App.css'

import CustomerRouters from './Routers/CustomerRouters'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/*' element={<CustomerRouters/>}>

      </Route>
    </Routes>
    
     
    </>
  )
}

export default App
