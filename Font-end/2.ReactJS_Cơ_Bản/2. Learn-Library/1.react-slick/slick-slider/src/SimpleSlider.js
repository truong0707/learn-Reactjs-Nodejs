import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-right" onClick={onClick}>lui</div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow arrow-left" onClick={onClick}>tới</div>
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider className="cc" {...settings}>
          <div className="cc1">
            <h3 className="ccs">1</h3>
          </div>
          <div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div><div className="cc1">
            <h3 className="ccs">1</h3>
          </div>
        </Slider>
      </div>
    );
  }
}