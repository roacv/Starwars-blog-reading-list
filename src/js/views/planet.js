import React from "react";
import "../../styles/home.css";
import titlePage from "../../img/characters.png"
import { Card } from "../component/card";
import { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from "react-router";

export const Planet = () => {
	const { store, actions } = useContext(Context);
	let param = useParams();
	//https://starwars-visualguide.com/assets/img/characters/1.jpg
	console.log(param);
	useEffect(() => {
        actions.getPlanet(`https://www.swapi.tech/api/planets/${param.id}`);
    },[])
	console.log(store.planet);
	if (store.planet !== null){
		console.log(store.planet);
		if (store.planet.message !== null){
			console.log(store.planet.message);}
		// console.log("properties",store.planet.data.result.properties);
	}
	return (
		<>
		{store.planet !== null ? (
		<div className="card mb-3" style={{width: "1500px"}}>
			<div className="row g-0">
				<div className="col-md-4 my-auto">
				<img src={"https://starwars-visualguide.com/assets/img/planets/"+(param.id)+".jpg"} className="img-fluid rounded-start" alt="..."/>
				</div>
				<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title">{store.planet.result.properties.name}</h5>
					<p className="card-text">{store.planet.result.description}</p>
					<table className="table table-dark table-striped w-50">
						<tbody>
							<tr>
								<th scope="row">Climate</th>
								<td>{store.planet.result.properties.climate}</td>
							</tr>
							<tr>
								<th scope="row">Diameter</th>
								<td>{store.planet.result.properties.diameter}</td>
							</tr>	
							<tr>
								<th scope="row">Gravity</th>
								<td>{store.planet.result.properties.gravity}</td>
							</tr>
							<tr>
								<th scope="row">Orbital period</th>
								<td>{store.planet.result.properties.orbital_period}</td>
							</tr>		
							<tr>
								<th scope="row">Population</th>
								<td>{store.planet.result.properties.population}</td>
							</tr>	
							<tr>
								<th scope="row">Rotation period</th>
								<td>{store.planet.result.properties.rotation_period}</td>
							</tr>	
							<tr>
								<th scope="row">Sufrace water</th>
								<td>{store.planet.result.properties.surface_water}</td>
							</tr>
							<tr>
								<th scope="row">Terrainr</th>
								<td>{store.planet.result.properties.terrain}</td>
							</tr>																		
						</tbody>
					</table>
					<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
				</div>
				</div>
			</div>
		</div>): null }
		</>
	);
	}
