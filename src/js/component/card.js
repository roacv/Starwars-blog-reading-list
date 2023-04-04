import React from "react";
import { Link } from "react-router-dom";
import { BsBookmark } from "react-icons/bs";

export const Card = (props) => {
	//console.log(props.result.url);
	
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
				<div className="btn btn-warning"><BsBookmark/></div>
			</div>
		</div>
	</div>
	);
};
