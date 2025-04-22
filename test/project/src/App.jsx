import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Transaction from './components/Transaction'
import Settings from './components/Settings'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
   <div>
    <Sidebar/>
    <Routes>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/transaction' element={<Transaction/>}/>
      <Route path='/settings' element={<Settings/>}/>
    </Routes>
   </div>
  )
}

export default App
