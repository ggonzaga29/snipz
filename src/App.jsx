import React from 'react'
import { Routes, Route } from 'react-router-dom'

// screens
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

// layouts
import AuthLayout from './layouts/AuthLayout'
import MainLayout from './layouts/MainLayout'
import SnippetPage from './pages/SnippetPage'

const App = () => {
  return (
    <div className="dark">
      <div className="min-h-screen min-w-screen dark:bg-slate-800 text-white">
        <Routes>
          <Route path="/" element={<MainLayout />}>
						<Route path='/' element={<Home/>	} />
						<Route path="/:user/:snippetId" element={<SnippetPage/>} />
					</Route>

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
