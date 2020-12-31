import React from "react";
import "./newYear";
import "./css/App.css";

export default function App() {
  return (
    <>
      <div className="container">
        <div className="imgBx"></div>
        <div className="countdownBx">
          <h2>
            Count Down To New Year <br />{" "}
            <span>
              20<i>21</i>
            </span>
          </h2>
          <div className="countdown">
            <div id="day">D</div>
            <div id="hour">H</div>
            <div id="minute">M</div>
            <div id="second">S</div>
          </div>
        </div>
      </div>
    </>
  );
}
