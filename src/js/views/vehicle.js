import React from "react";
import "../../styles/home.css";
import { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from "react-router";

export const Vehicle = () => {
	const { store, actions } = useContext(Context);
	let param = useParams();
	useEffect(() => {
        actions.getVehicle(`https://www.swapi.tech/api/vehicles/${param.id}`);
    },[])
	return (
		<>
		{store.vehicle !== null ? (
		<div className="card mb-3 mx-auto" style={{width: "1000px"}}>
			<div className="row g-0">
				<div className="col-md-4 my-auto">
					<img src={"https://starwars-visualguide.com/assets/img/vehicles/"+(param.id)+".jpg"} className="img-fluid rounded-start" alt="..."/>
				</div>
				<div className="col-md-8">
				<div className="card-body mx-5">
					<h5 className="card-title">{store.vehicle.result.properties.name}</h5>
					<p className="card-text">{store.vehicle.result.description}</p>
					<table className="table table-dark table-striped w-75">
						<tbody>
							<tr>
								<th scope="row">Cargo capacity</th>
								<td>{store.vehicle.result.properties.cargo_capacity}</td>
							</tr>
							<tr>
								<th scope="row">Consumables</th>
								<td>{store.vehicle.result.properties.consumables}</td>
							</tr>	
							<tr>
								<th scope="row">Cost in credits</th>
								<td>{store.vehicle.result.properties.cost_in_credits}</td>
							</tr>
							<tr>
								<th scope="row">Crew</th>
								<td>{store.vehicle.result.properties.crew}</td>
							</tr>		
							<tr>
								<th scope="row">Lenght</th>
								<td>{store.vehicle.result.properties.length}</td>
							</tr>	
							<tr>
								<th scope="row">Manufacturer</th>
								<td>{store.vehicle.result.properties.manufacturer}</td>
							</tr>	
							<tr>
								<th scope="row">Max atmosphering speed</th>
								<td>{store.vehicle.result.properties.max_atmosphering_speed}</td>
							</tr>
							<tr>
								<th scope="row">Model</th>
								<td>{store.vehicle.result.properties.model}</td>
							</tr>
							<tr>
								<th scope="row">Passengers</th>
								<td>{store.vehicle.result.properties.passengers}</td>
							</tr>
							<tr>
								<th scope="row">Vehicle class</th>
								<td>{store.vehicle.result.properties.vehicle_class}</td>
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
