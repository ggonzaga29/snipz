import React from 'react';
import { Link } from 'react-router-dom';

// https://wallpapers-clan.com/wp-content/uploads/2022/11/rick-and-morty-matching-pfp-2.jpg

const Navbar = () => {
	return (
		<div className="w-full dark:bg-slate-900 dark:text-white h-16 select-none">
			<div className="h-full flex justify-between items-center px-5">
				<div className="fully-center">
					<div className="fully-center">
						<h1 className="text-3xl font-mono tracking-wide">
							<Link to="/">Snippy</Link>
						</h1>
					</div>

					<div className="ml-10">
						<ul className="font-bold flex gap-5">
							<li className="hover:opacity-80 cursor-pointer">
								<Link to="/user/snips">My Snips</Link>
							</li>
							<li className="hover:opacity-80 cursor-pointer">
								<Link to="/">Discover</Link>
							</li>
							<li className="hover:opacity-80 cursor-pointer">
								<Link to="/">Favorites</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex items-center gap-5">
					<div>
						<Link to="/create" className="text-3xl cursor-pointer">
							+
						</Link>
					</div>
					<div className="flex items-center justify-items-end gap-2">
						<div className="w-12 h-12 rounded-full overflow-hidden">
							<img
								src="https://wallpapers-clan.com/wp-content/uploads/2022/11/rick-and-morty-matching-pfp-2.jpg"
								alt=""
							/>
						</div>
						<span className="scale-75 cursor-pointer">&#9660;</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
