import React from "react";
import { Link } from 'react-router-dom';

const TextSlide = ({ slide, handleButtonClick }) => {
  const { h1, buttons } = slide;

  return (
    <div>
      <h1 className="head1">{h1}</h1>
      <div className="buttons">
        {buttons.map((buttonLabel, index) => (
          <button key={index} className="btnc" onClick={() => handleButtonClick(buttonLabel)}>
            {buttonLabel}
          </button>
        ))}
      </div>
      <Link to="/goquiz">
          <button className="start-button">GO TO QUIZ</button>
        </Link>
    </div>
  );
};

export default TextSlide;
