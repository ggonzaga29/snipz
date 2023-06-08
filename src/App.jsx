import React from 'react'
import { Routes, Route } from 'react-router-dom'

import AuthNavbar from './components/AuthNavbar/AuthNavbar'

import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

const App = () => {
  return (
    <div className="dark ">
      <div className="min-h-screen min-w-screen dark:bg-slate-800 text-white">
				<AuthNavbar/>
        <div className="px-10 py-3">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
