import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav>
			<ul className="flex space-x-4 justify-around mt-5">
				<div className="logo">
					<h1 className="text-center">Logo</h1>
				</div>
				<div className="link-container list-none no-underline space-x-4">
					<Link href="/">Home</Link>
					<Link href="/about">About</Link>
					<Link href="/portfolio">Portfolio</Link>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
