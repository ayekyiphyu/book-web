import React from "react";
import Slider from "react-slick";

interface Slide {
  id?: number;
  image: string;
  title: string;
  description: string;
}

interface SliderProps {
  slides: Slide[];
}

const SliderComponent = ({ slides }: SliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const sliderStyle = {
    width: "100%",
    maxWidth: "100%",
  };

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image} alt={slide.title} style={sliderStyle} />
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
