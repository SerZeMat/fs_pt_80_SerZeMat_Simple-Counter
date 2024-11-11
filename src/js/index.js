//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/secondsCounter.jsx";

//render your react application

let counter = 0;

const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(()=>{
  const numOne = Math.floor(counter / 1);
  const numTwo = Math.floor(counter / 10);
  const numThree = Math.floor(counter / 100);
  const numFour = Math.floor(counter / 1000);
  const numFive = Math.floor(counter / 10000);
  const numSix = Math.floor(counter / 100000 )
counter++;

  root.render(<SecondsCounter digitOne={numOne} digitTwo={numTwo} digitThree={numThree} digitFour={numFour} digitFive={numFive} digitSix={numSix}/>);

},1000);
