import React from 'react'
import './TrekSlick.css'
import { Slide } from 'react-slideshow-image'
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
  const buttonStyle1 = {
    width: "30px",
    background: 'none',
    border: '0px',
    top:'200px',
    left:'40px'
};
  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px',
    top:'200px',
    left:'80px',
    transform: "rotate(180deg)"
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle1 }}><img src={left} alt='prev arrow'/></button>,
    nextArrow: <button style={{ ...buttonStyle }}><img src={left} alt='next arrow'/></button>
}

const TrekSlick = () => {

  return (
    <div className="container">
            {/* Hello slider */}
            <div className="slider-container h-[400px] w-[500]">
              <Slide {...properties}>
                <div className='slide-container'>
                  <div className="relative"></div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Babila Ebwélé</h2>
                    <p className="text-sm text-gray-600">BookingCore</p>
                    <div className="flex mt-4">
                      <p>
                        We had 10 days. Iguazu Falls, Rio, and Paraty. We had
                        Orico as a guide for the first 4 days...he was fabulous.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative"></div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Babila Ebwélé</h2>
                    <p className="text-sm text-gray-600">BookingCore</p>
                    <div className="flex mt-4">
                      <p>
                        We had 10 days. Iguazu Falls, Rio, and Paraty. We had
                        Orico as a guide for the first 4 days...he was fabulous.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative"></div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Babila Ebwélé</h2>
                    <p className="text-sm text-gray-600">BookingCore</p>
                    <div className="flex mt-4">
                      <p>
                        We had 10 days. Iguazu Falls, Rio, and Paraty. We had
                        Orico as a guide for the first 4 days...he was fabulous.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="relative"></div>
                  <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">Babila Ebwélé</h2>
                    <p className="text-sm text-gray-600">BookingCore</p>
                    <div className="flex mt-4">
                      <p>
                        We had 10 days. Iguazu Falls, Rio, and Paraty. We had
                        Orico as a guide for the first 4 days...he was fabulous.
                      </p>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
  )
}

export default TrekSlick