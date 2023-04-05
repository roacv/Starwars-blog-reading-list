import React from "react";
import { Link } from "react-router-dom";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useContext } from 'react';
import { Context } from '../store/appContext';

export const Card = (props) => {
	const { store, actions } = useContext(Context);
    const { favorites } = store;
	return (
	<div className="card mt-3 ms-1 me-1">
		<div className="cardimg border mx-auto">
			<img src={props.img} className="card-img-top" alt="..." style={{height:"350px"}}/>
		</div>
		<div className="card-body bg-secondary bg-opacity-75">
			<h5 className="card-title">{props.name}</h5>
			<p className="card-text"></p>
			<div className="d-flex justify-content-between">
				<Link to={"/"+props.destino+"/"+props.id} className="btn btn-primary">Learn more</Link>
				{(favorites.indexOf(props.name) === -1) ?
				(
					<div className="btn btn-outline-warning" onClick={() => {actions.addFavorite(props.name)}}>
						<BsBookmark/>
					</div>
				) : (
					<div className="btn btn-warning" onClick={() => {actions.removeFavorite(props.name)}}>
						<BsFillBookmarkFill/>
					</div>
				)}
			</div>
		</div>
	</div>
	);
};
