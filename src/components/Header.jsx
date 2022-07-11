/** @format */

import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between Regular shadow">
			<div className="container">
				<h1>
					<Link to={"/"} className="text-light">
						CRUD-react , redux,rest api y axios
					</Link>
				</h1>
			</div>
			<Link className="btn btn-danger nuevo-post d-block d-md-inline-block " to={"/products/new"}>
				Agregar Producto &#43;
			</Link>
		</nav>
	);
};
