import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';



function Countdown() {
 return(
  <>
   <App />
  </>
 );
}


const rootElement = document.getElementById("root");
ReactDOM.render(
<Countdown  />,
  rootElement
);
