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
import j from "../images/3.jpeg";
import k from "../images/1.jpeg";

import { Carousel } from "react-responsive-carousel";
function ImageSlider() {
  return (
    <>
      <div>
        <Carousel infiniteLoop autoPlay showThumbs={false} >
          <div className="image">
            <img src={a} alt="" />
          </div>
          <div className="image">
            <img src={b} alt="mobile" />
          </div>
          <div className="image">
            <img src={c} alt="mobile" />
          </div>
          <div className="image">
            <img src={d} alt="mobile" />
          </div>
          <div className="image">
            <img src={e} alt="mobile" />
          </div>
          <div className="image">
            <img src={f} alt="mobile" />
          </div>
          <div className="image">
            <img src={g} alt="mobile" />
          </div>
          <div className="image">
            <img src={h} alt="mobile" />
          </div>
          <div className="image">
            <img src={i} alt="mobile" />
          </div>
          <div className="image">
            <img src={j} alt="mobile" />
          </div>
          <div className="image">
            <img src={k} alt="mobile" />
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default ImageSlider;
