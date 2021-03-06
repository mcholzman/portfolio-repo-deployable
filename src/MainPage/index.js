import React, { Component } from "react";
import "./style.css";

class MainPage extends Component {
  render() {
    return (
      <div className="main-page-container">
        <div className="background-globe">
          <h2 className="globe-text">Full Stack Web Developer</h2>
          <svg viewBox="0 0 160 160" width="160" height="160">
            <circle cx="80" cy="80" r="50" />
            <g transform=" matrix(01.266, -0.5, 0.25, 0.433, 80, 80)">
              <path
                d="M 0,70 A 65,70 0 0,0 65,0 5,5 0 0,1 75,0 75,70 0 0,1 0,70Z"
                fill="#FFF"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="360 0 0"
                  to="0 0 0"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </path>
            </g>

          </svg>
        </div>
        <img
          src="https://i.imgur.com/wT3za4V.png"
          height="50px"
          className="shadow"
        />
        <a href="#about-page" id="link">
          <img
            src="https://i.imgur.com/T5f8v9i.png"
            height="50px"
            className="arrow"
          />
        </a>
      </div>
    );
  }
}

export default MainPage;

//           <p className="arrow-text">my work</p>
