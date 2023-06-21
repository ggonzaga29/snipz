import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import api from '../utils/api';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastConfig from '../utils/toastConfig';

const Register = () => {
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// check if all fields are filled
			if (!username || !password || !email || !confirmPassword) {
				toast.error('Please fill out all fields', toastConfig);
				return;
			}

			// check if passwords match
			if (password !== confirmPassword) {
				toast.error('Passwords do not match', toastConfig);
				return;
			}

			const res = await api.post('/auth/register', {
				username,
				password,
				email,
				confirmPassword,
			});

			if (res.status === 200) {
				toast.success('success!', toastConfig);

				setUsername('');
				setPassword('');
				setEmail('');
				setConfirmPassword('');

				navigate('/auth/login');
			}
		} catch (err) {
			toast.error(err.response.data.message, toastConfig);
		}
	};

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
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div className="flex flex-col mb-5">
							<span>Email</span>
							<input
								className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
								type="email"
								placeholder="Enter your email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className="flex flex-col mb-5">
							<span>Password</span>
							<input
								className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
								type="password"
								placeholder="Enter your password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="flex flex-col">
							<span>Confirm Password</span>
							<input
								className="mt-1 py-2 px-3 outline-none dark:bg-slate-600"
								type="password"
								placeholder="Confirm your password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</div>
					</div>
					{/* Buttons */}
					<div className="mt-10">
						<button className="w-full bg-yellow-600 py-2" onClick={handleSubmit}>
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

			{/* Error */}
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>
		</div>
	);
};

export default Register;
