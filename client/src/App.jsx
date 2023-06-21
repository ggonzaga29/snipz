import React from 'react';
import { Routes, Route } from 'react-router-dom';

// screens
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SnippetPage from './pages/SnippetPage';
import CreateSnippet from './pages/CreateSnippet';

// layouts
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';

const App = () => {
	return (
		<div className="dark">
			<div className="min-h-screen min-w-screen dark:bg-slate-800 text-white pb-16">
				<Routes>
					<Route path="/" element={<MainLayout />}>
						<Route path="/" element={<Home />} />
						<Route
							path="/:user/:snippetId"
							element={<SnippetPage />}
						/>
						<Route path="/create" element={<CreateSnippet />} />
					</Route>

					<Route path="/auth/*" element={<AuthLayout />}>
						<Route path="login" element={<Login />} />
						<Route path="register" element={<Register />} />
					</Route>
				</Routes>
			</div>
		</div>
	);
};

export default App;
