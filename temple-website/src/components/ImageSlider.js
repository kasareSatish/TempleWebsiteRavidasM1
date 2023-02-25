import "./ImageSlideStyle.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import a from "../images/1.jpeg";
import b from "../images/2.jpeg";
import c from "../images/3.jpeg";
import d from "../images/4.jpeg";
import e from "../images/5.jpeg";
import f from "../images/6.jpeg";
import g from "../images/7.jpeg";
import h from "../images/8.jpeg";
import i from "../images/9.jpeg";
import j from "../images/9.jpeg";


import { Carousel } from "react-responsive-carousel";
const images = [a, b, c, d, e, f, g, h, i,j];

function ImageSlider() {
  return (
    <Carousel infiniteLoop autoPlay showThumbs={false}>
      {images.map((image, index) => (
        <div className="image" key={index}>
          <img src={image} alt={`slide-${index}`} />
        </div>
      ))}
    </Carousel>
  );
}


export default ImageSlider;
