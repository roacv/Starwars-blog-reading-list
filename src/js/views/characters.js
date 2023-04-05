import React from "react";
import "../../styles/home.css";
import titlePage from "../../img/characters.png"
import { Card } from "../component/card";
import { useContext } from 'react';
import { Context } from '../store/appContext';

export const Characters = () => {
	const { store, actions } = useContext(Context);
	return (
	<div className="text-start mt-5">
		<img src={titlePage} alt="Logo" width="400" height="30" className="d-inline-block align-text-top"/>
		<div className="scroll">
			<div className="d-flex flex-row flex-nowrap">
				{store.characters !== null ?
					(store.characters.results.map((result, index) =>    {
						return (
							<Card key={index} 
							name={result.name} 
							id={result.uid} 
							img={"https://starwars-visualguide.com/assets/img/characters/"+(result.uid)+".jpg"}
							destino="character"/>
						);
					}
					)): null}
			</div>
		</div>
	</div>
	);
	}
