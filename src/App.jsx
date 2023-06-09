import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'

import AuthNavbar from './components/AuthNavbar/AuthNavbar'

import Home from './pages/Home/Home'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

const AuthLayout = () => {
  return (
    <div className="dark">
      <div className="min-h-screen min-w-screen dark:bg-slate-800 text-white">
        <AuthNavbar />
        <Outlet /> {/* Render nested child routes */}
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className="dark">
      <div className="min-h-screen min-w-screen dark:bg-slate-800 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
