import React from "react";
import { Link } from "react-router-dom";
import swLogo from "../../img/pngegg.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 ps-5 pe-5">
			<Link className="navbar-brand" to="/">
				<img src={swLogo} alt="Logo" width="180" height="90" className="d-inline-block align-text-top"/>
			</Link>
			<div className="ml-auto">
				<Link to="/">
					<button className="btn btn-primary">Fav's</button>
				</Link>
			</div>
		</nav>
	);
};
