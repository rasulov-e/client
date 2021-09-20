import React from "react";

const Button = ({ i, element, handleClick, disabled }) => {
	return (
		<button
			disabled={disabled}
			onClick={(e) => handleClick(e, i)}
			className=" border-gray-500 text-4xl text-green-300">
			{element}
		</button>
	);
};

export default Button;
