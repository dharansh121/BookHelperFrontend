import React, { useEffect, useRef, useState } from "react";
import "./OptionCard.css";
import Button from "@material-ui/core/Button";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const OptionCard = (props) => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  var width = 320;
  var height = 490;
  const rX = (mouseX / width) * 30;
  const rY = (mouseY / height) * -30;
  const tX = (mouseX / width) * -40;
  const tY = (mouseY / height) * -40;

  useEffect(() => {
    const element = ref.current;
    width = element.offsetWidth;
    height = element.offsetHeight;
    console.log(width, height);
  });

  const ref = useRef(null);
  return (
    <div className="optionCard-container">
      <div
        ref={ref}
        className="optionCard-card-wrap"
        onMouseMove={(e) => {
          setMouseX(e.pageX - ref.current.offsetLeft - width / 2);
          setMouseY(e.pageY - ref.current.offsetTop - height / 2);
        }}
        onMouseLeave={(e) => {
          setMouseX(0);
          setMouseY(0);
        }}
      >
        <div
          className="optionCard-card"
          style={{ transform: `rotateY(${rX}deg) rotateX(${rY}deg)` }}
        >
          <div
            className="optionCard-card-bg"
            style={{
              transform: `translateX(${tX}px) translateY(${tY}px)`,
              backgroundImage: `url(${props.photo})`,
            }}
          ></div>
          <div className="optionCard-card-info">
            <div className="optionCard-cutout">{props.optionName}</div>

            <p>{props.optionDescription}</p>

            <Button
              // style={{ marginBlock: "5px" }}
              variant="outlined"
              className="optionCard-cardButton"
              endIcon={<ArrowForwardIosIcon style={{ fontSize: "15px" }} />}
            >
              {props.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OptionCard;
