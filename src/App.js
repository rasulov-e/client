import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from "./components/Game";
import Home from "./components/Home";
// import { io } from "socket.io-client";
import { useEffect } from "react";

// const socket = io("http://localhost:5000");

function App() {
	return (
		<div className="bg-gray-600 h-screen w-screen text-white flex justify-center items-center">
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/game/:room">
						<Game />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
