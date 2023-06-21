import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="flex justify-center items-center flex-col">
			<div className="mt-10 w-full px-5">
				<div>
					<h1 className="text-5xl font-bold text-center">
						<Link to="/">snipz</Link>
					</h1>
				</div>
				<div className="dark:bg-slate-700 p-12 mt-10 mx-auto max-w-xl">
					<h2 className="text-2xl text-center font-bold ">
						Welcome Back!
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
						</div>
						<div className="flex flex-col">
							<span>Password</span>
							<input
								className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
								type="password"
								placeholder="Enter your password"
							/>
						</div>
					</div>
					{/* Buttons */}
					<div className="mt-10">
						<button className="w-full bg-lime-600 py-2">
							Log in
						</button>
						<div className="text-center my-3">Or</div>
						<button className="w-full bg-neutral-800 py-2">
							Sign in with Github
						</button>

						<div className="mt-8 hover:underline text-blue-500 text-center text-underline">
							<Link to="/auth/register">
								Don&apos;t have an Account?
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
