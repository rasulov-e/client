import React from "react";
import { useState } from "react";
import Button from "./Button";

const Game = () => {
	const [players, setPlayers] = useState({
		firstPlayerName: "Usopp",
		firstPlayerWins: 0,
		firstPlayerSign: "x",
		firstPlayerTurn: true,
		secondPlayerName: "Chopper",
		secondPlayerWins: 0,
		secondPlayerSign: "o",
		secondPlayerTurn: false,
	});

	const [board, setBoard] = useState(Array(9).fill("-"));
	const [buttons, setButtons] = useState(Array(9).fill(false));

	const isGameOver = (squares) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < 8; i++) {
			const [a, b, c] = lines[i];
			if (
				squares[a] === "-" ||
				squares[b] === "-" ||
				squares[c] === "-"
			) {
				continue;
			}
			if (
				squares[a] &&
				squares[a] === squares[b] &&
				squares[a] === squares[c]
			) {
				return true;
			}
		}
		return false;
	};

	const nextRound = () => {
		if (players.firstPlayerTurn) {
			let inc = players.secondPlayerWins + 1;
			setPlayers({
				...players,
				secondPlayerWins: inc,
			});
		} else {
			let inc = players.firstPlayerWins + 1;
			setPlayers({
				...players,
				firstPlayerWins: inc,
			});
		}

		if (players.firstPlayerSign === "x") {
			setPlayers({
				...players,
				firstPlayerSign: "o",
				secondPlayerSign: "x",
			});
		} else {
			setPlayers({
				...players,
				firstPlayerSign: "x",
				secondPlayerSign: "o",
			});
		}

		setBoard(Array(9).fill("-"));
		setButtons(Array(9).fill(false));
	};

	const handleClick = (e, i) => {
		if (players.firstPlayerTurn) {
			const newBoard = [...board];
			newBoard[i] = players.firstPlayerSign;
			setBoard(newBoard);
			setPlayers({
				...players,
				firstPlayerTurn: false,
				secondPlayerTurn: true,
			});
		} else {
			const newBoard = [...board];
			newBoard[i] = players.secondPlayerSign;
			setBoard(newBoard);
			setPlayers({
				...players,
				firstPlayerTurn: true,
				secondPlayerTurn: false,
			});
		}

		const newButtons = [...buttons];
		newButtons[i] = true;
		setButtons(newButtons);

		if (isGameOver(board)) {
			nextRound();
		}
	};

	const resetGame = () => {
		if (players.firstPlayerSign === "x") {
			setPlayers({
				...players,
				firstPlayerSign: "o",
				secondPlayerSign: "x",
			});
		} else {
			setPlayers({
				...players,
				firstPlayerSign: "x",
				secondPlayerSign: "o",
			});
		}
		setBoard(Array(9).fill("-"));
		setButtons(Array(9).fill(false));
	};

	return (
		<div className="w-screen h-screen">
			<div className="flex justify-between w-screen bg h-24 items-center shadow-xl bg-gray-800 pl-4 pr-4 mb-10">
				<h4
					className={`${
						players.firstPlayerTurn ? "bg-green-600" : ""
					} p-2 rounded-md`}>
					{players.firstPlayerName}({players.firstPlayerSign}) :{" "}
					{players.firstPlayerWins}
				</h4>
				<button
					className="bg-red-600 p-2 rounded-md"
					onClick={resetGame}>
					reset
				</button>
				<h4
					className={`${
						players.secondPlayerTurn ? "bg-green-600" : ""
					} p-2 rounded-md`}>
					{players.secondPlayerName}({players.secondPlayerSign}) :{" "}
					{players.secondPlayerWins}
				</h4>
			</div>

			<div className="bg-gray-800 rounded-xl shadow-xl text-white w-64 h-64 grid grid-cols-3 m-auto">
				{board.map((el, i) => (
					<Button
						disabled={buttons[i]}
						key={i}
						element={el}
						i={i}
						handleClick={handleClick}
					/>
				))}
			</div>
		</div>
	);
};

export default Game;
