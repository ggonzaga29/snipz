import React from 'react'

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="dark:bg-slate-700 p-12 mt-10">
        <h2 className="text-2xl text-center font-bold ">Create an Account</h2>
        {/* Inputs */}
        <div className="mt-6">
          <div className="flex flex-col mb-5">
            <span>Username</span>
            <input
              className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col mb-5">
            <span>Password</span>
            <input
              className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
              type="password"
              placeholder="Enter your password"
            />
          </div>
					<div className="flex flex-col">
            <span>Confirm Password</span>
            <input
              className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
              type="password"
              placeholder="Confirm your password"
            />
          </div>
        </div>
        {/* Buttons */}
        <div className="mt-10">
          <button className="w-full bg-yellow-600 py-2">Sign up</button>
        </div>
      </div>
    </div>
  )
}

export default Register
