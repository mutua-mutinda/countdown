import React from "react";
import './newYear';
import "./cssApp.css";

   
export default function App() {
  return (
    <div className="container">
        <div className="imgBx"></div>
        <div className="countdownBx">
            <h2>Count Down To New Year <br/> <span>20<i>20</i></span></h2>
            <div className="countdown">
                <div id="day">Na</div>
                <div id="hour">Na</div>
                <div id="minute">Na</div>
                <div id="second">Na</div>
            </div>
      </div>
    </div>
    );
}
