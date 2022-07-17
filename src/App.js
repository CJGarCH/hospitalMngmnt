import React from 'react'
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import GetRenApi from './components/GetRenApi'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Object from './components/Object'

export default function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/render/' element={<GetRenApi />} />
        <Route path='/object/:objectId' element={<Object />}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    
    )
}



