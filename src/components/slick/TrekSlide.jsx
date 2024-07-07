import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import banner from "../../assets/trek_banner.jpg";
import left from '../../assets/svg/left-arrow.svg'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '200px'
}
const images = [
    banner
  ];
  const buttonStyle1 = {
    width: "30px",
    background: 'none',
    border: '0px',
    top:'-30px',
    left:'-80px'
};
  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    top:'-30px',
    left:'-40px',
    transform: "rotate(180deg)"
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle1 }}><img src={left} alt='prev arrow'/></button>,
    nextArrow: <button style={{ ...buttonStyle }}><img src={left} alt='next arrow'/></button>
}
const TrekSlide = () => {
  return (
    <div>
       <div className="slide-container">
        <Slide {...properties}>
         {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Slide>
      </div>
    </div>
  )
}

export default TrekSlide