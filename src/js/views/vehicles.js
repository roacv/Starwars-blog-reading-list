import React from "react";
import "../../styles/home.css";
import titlePage from "../../img/vehicles.png"
import { Card } from "../component/card";
import { useContext } from 'react';
import { Context } from '../store/appContext';

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	return (
	<div className="text-start mt-5">
		<img src={titlePage} alt="Logo" width="400" height="30" className="d-inline-block align-text-top"/>
		<div className="scroll">
			<div className="d-flex flex-row flex-nowrap">
				{store.vehicles !== null ?
					(store.vehicles.results.map((result, index) =>    {
						return (
							<Card key={index} 
							name={result.name} 
							id={result.uid} 
							img={"https://starwars-visualguide.com/assets/img/vehicles/"+(result.uid)+".jpg"}
							destino="vehicle"/>	
						);
					}
					)): null}
			</div>
		</div>
	</div>
	);
};