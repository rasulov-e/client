import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Link to="/game/1">
			<button className="bg-gray-900 p-6 rounded-md shadow-2xl">
				create game
			</button>
		</Link>
	);
};

export default Home;
