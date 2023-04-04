import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Characters } from "./characters";
import { Planets } from "./planets";
import { Vehicles } from "./vehicles";


export const Home = () => (
	<div className="text-center mt-5 ps-3">
		<Characters className="grid" />
		<Planets/>
		<Vehicles/>
	</div>
);
