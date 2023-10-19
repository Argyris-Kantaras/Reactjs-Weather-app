import { useEffect, useRef } from "react";
import direction from "../../icons/arrow-orange.png";

function DirectionArrow(props) {
  const arrowRef = useRef();

  useEffect(() => {
    if (props.wind === "ENE")
      arrowRef.current.style.transform = "rotate(45deg)";
    if (props.wind === "E") arrowRef.current.style.transform = "rotate(90deg)";
    if (props.wind === "ESE")
      arrowRef.current.style.transform = "rotate(135deg)";
    if (props.wind === "S") arrowRef.current.style.transform = "rotate(180deg)";
    if (props.wind === "N") arrowRef.current.style.transform = "rotate(0deg)";
    if (props.wind === "W") arrowRef.current.style.transform = "rotate(-90deg)";
    if (props.wind === "WNW")
      arrowRef.current.style.transform = "rotate(-45deg)";
    if (props.wind === "WSW")
      arrowRef.current.style.transform = "rotate(-135deg)";
  }, [props]);

  return (
    <img
      style={{ width: "2em", position: "relative", top: "15%" }}
      ref={arrowRef}
      src={direction}
    />
  );
}

export default DirectionArrow;
