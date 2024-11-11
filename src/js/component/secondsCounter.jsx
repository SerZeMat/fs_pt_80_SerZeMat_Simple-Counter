import React from "react";
import { Digit } from "./digit.jsx";
//import { StopCounter } from "./stop.jsx";

const SecondsCounter = ({digitOne, digitTwo, digitThree, digitFour, digitFive, digitSix }) => {
	return (
		<div className="text-center">
			<p>Simple Counter which shows time passed since onLoad page</p>
			<section className="container my__Counter">
				<span className="fa-regular fa-clock mt-2"></span>
				<Digit value={digitSix % 10} />
				<Digit value={digitFive % 10} />
				<Digit value={digitFour % 10}/>
				<Digit value={digitThree % 10} />
				<Digit value={digitTwo % 10} />
				<Digit value={digitOne % 10} />
			</section>
			<section className="container my__Button mt-2">
				<button type="button" className="btn">Stop</button>
				<button type="button" className="btn">Restart</button>
				<button type="button" className="btn">Resume</button>
			</section>
		</div>
	);
};

export default SecondsCounter;
