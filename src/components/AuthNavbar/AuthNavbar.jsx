import React from 'react'
import { Link } from 'react-router-dom'

const AuthNavbar = () => {
  return (
    <div className="w-full dark:bg-slate-900 dark:text-white h-16">
      <div className="h-full flex justify-between items-center px-10">
        <div className="fully-center py-3">
          <h1 className="text-3xl font-bold tracking-wide">
            <Link to="/">snipz</Link>
          </h1>
        </div>
        <div className="h-full">
          <ul className="flex gap-5 h-full">
            <li className="cursor-pointer flex items-center">
              <Link to="/auth/login">Login</Link>
            </li>
            <li className="cursor-pointer flex items-center">
              <Link to="/auth/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AuthNavbar
