import React from "react";
import { Link } from "react-router-dom";
import swLogo from "../../img/pngegg.png";
import { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { BsTrash } from "react-icons/bs";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [mostrarFavs, setMostrarFavs] = useState("d-none list-group");
	const [count, setCont] = useState(0);
	console.log(store.favorites);

	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		let i = 0;
		{store.favorites.map((el, index) => {
			i++;
		})}
		setCont(i);
	  });

	const muestraFavs = () =>{
		if (mostrarFavs==="d-none list-group"){
			setMostrarFavs("list-group");
		}else {
			setMostrarFavs("d-none list-group");
		}
	}
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 ps-5 pe-5">
			<Link className="navbar-brand" to="/">
				<img src={swLogo} alt="Logo" width="180" height="90" className="d-inline-block align-text-top"/>
			</Link>
			<div className="ms-auto me-5">
					<button className="btn btn-primary fav me-5" onClick={muestraFavs}>Favorites {count}</button>
					<ul className={mostrarFavs+" list-group list-group-flush position-absolute"}>
						{store.favorites.map((el, index) => {
							console.log("lista map");
							return (
									<li key={index} className="list-group-item">
										<table className="table">
											<tbody>
												<tr>
												<td>{el}</td>
												<td className="text-end"><BsTrash onClick={() => actions.removeFavorite(el)}/></td>
												</tr>
											</tbody>
										</table>
									</li> 
							);
						})}
					</ul>
			</div>
		</nav>
	);
};