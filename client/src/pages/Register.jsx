import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
	return (
		<div className="flex items-center justify-center w-full">
			<div className="mt-10 w-full px-5">
				<div>
					<h1 className="text-5xl font-bold text-center">snipz</h1>
				</div>
				<div className="dark:bg-slate-700 p-12 mt-10 mx-auto max-w-xl">
					<h2 className="text-2xl text-center font-bold ">
						Create an Account
					</h2>
					{/* Inputs */}
					<div className="mt-6">
						<div className="flex flex-col mb-5">
							<span>Username</span>
							<input
								className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
								type="text"
								placeholder="Enter your username"
							/>
							{/* error */}
							{/* <span className='text-red-500'>Username already exists!</span> */}
						</div>
						<div className="flex flex-col mb-5">
							<span>Email</span>
							<input
								className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
								type="email"
								placeholder="Enter your email"
							/>
							{/* error */}
							{/* <span className='text-red-500'>Username already exists!</span> */}
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
						<button className="w-full bg-yellow-600 py-2">
							Sign up
						</button>

						<div className="mt-8 hover:underline text-blue-500 text-center text-underline">
							<Link to="/auth/login">
								Already have an Account?
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
