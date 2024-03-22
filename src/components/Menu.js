import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Text from './Text';
import Video from './Video';
import "../styles/Menu.css";
import { MdQuiz } from "react-icons/md";

const textSlides = [
  {
    "h1": "Choose Your Topic",
    "buttons": ["javaScricpt", "python", "react-js", "node-js", "java", "C"],
  }
];

const videoSlides = [
  {
    "videos": [
      {
        "src": "https://www.youtube.com/embed/W6NZfCO5SIk",
        "alt": "JavaScript Tutorial"
      },
      {
        "src": "https://www.youtube.com/embed/W6NZfCO5SIk",
        "alt": "Python Tutorial"
      },
      {
        "src": "https://www.youtube.com/embed/W6NZfCO5SIk",
        "alt": "Java Tutorial"
      },
      {
        "src": "https://www.youtube.com/embed/W6NZfCO5SIk",
        "alt": "C Tutorial"
      }
    ]
  }
];


const Menu = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((activeSlide + 1) % (textSlides.length + 1));
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? textSlides.length : activeSlide - 1);
  }
  

  return (
    <>
      <div className='head3'>
        <h1><MdQuiz className='icons' /><a className='title_m'>Quiz</a><a href="#" className='bee'>Bee</a></h1>
      </div>
      <div className="carousel">
        <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
        {activeSlide === 0 ? (
           <Text slide={textSlides[0]} >
           <button>Start Quiz</button>
         </Text>
        ) : (
          <div className="video-slide">
            <h1 className="head2">Courses for your improvement</h1>
            {videoSlides.map((video, idx) => (
              <Video key={idx} slide={video} />
            ))}
          </div>
        )}
        <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        <span className="indicators">
          {textSlides.map((item, idx) => (
            <button
              key={idx}
              className={activeSlide === idx ? "indicator" : "indicator indicator-inactive"}
              onClick={() => setActiveSlide(idx)}
            />
          ))}
        </span>
      </div>
    </>
  );
};

export default Menu;
