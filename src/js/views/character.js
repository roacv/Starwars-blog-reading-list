import React from "react";
import "../../styles/home.css";
import titlePage from "../../img/characters.png"
import { Card } from "../component/card";
import { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from "react-router";

export const Character = () => {
	const { store, actions } = useContext(Context);
	let param = useParams();
	//https://starwars-visualguide.com/assets/img/characters/1.jpg
	console.log(param);
	useEffect(() => {
        actions.getCharacter(`https://www.swapi.tech/api/people/${param.id}`);
    },[])
	console.log(store.character);
	if (store.character !== null){
		console.log(store.character.data.result.description);
		console.log("properties",store.character.data.result.properties);
	}
	return (
		<>
		{store.character !== null ? (
		<div className="card mb-3" style={{width: "1500px"}}>
			<div className="row g-0">
				<div className="col-md-4">
				<img src={"https://starwars-visualguide.com/assets/img/characters/"+(param.id)+".jpg"} className="img-fluid rounded-start" alt="..."/>
				</div>
				<div className="col-md-8">
				<div className="card-body">
					<h5 className="card-title">{store.character.data.result.properties.name}</h5>
					<p className="card-text">{store.character.data.result.description}</p>
					<table className="table table-dark table-striped w-50">
						<tbody>
							<tr>
								<th scope="row">Birth Year</th>
								<td>{store.character.data.result.properties.birth_year}</td>
							</tr>
							<tr>
								<th scope="row">Eye color</th>
								<td>{store.character.data.result.properties.eye_color}</td>
							</tr>
							<tr>
								<th scope="row">Gender</th>
								<td>{store.character.data.result.properties.gender}</td>
							</tr>
							<tr>
								<th scope="row">Hair color</th>
								<td>{store.character.data.result.properties.hair_color}</td>
							</tr>
							<tr>
								<th scope="row">Height</th>
								<td>{store.character.data.result.properties.height}</td>
							</tr>	
							<tr>
								<th scope="row">Mass</th>
								<td>{store.character.data.result.properties.mass}</td>
							</tr>	
							<tr>
								<th scope="row">Skin Color</th>
								<td>{store.character.data.result.properties.skin_color}</td>
							</tr>		
							<tr>
								<th scope="row">Home World</th>
								<td>{store.character.planet.result.properties.name}</td>
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
