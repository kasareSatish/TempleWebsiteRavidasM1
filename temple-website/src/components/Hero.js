import "./HeroStyle.css";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg} />
      </div>
      <div className="hero-text">
        <h1> {props.heading}</h1>
      </div>
    </>
  );
}

export default Hero;
