import { useRef } from "react";
import classes from "./overlay.module.css";

const overlayClass = document.querySelector(".overlay");

function Overlay(props) {
  // props.showOverlayHandler(overlayRef);

  return <div className={classes.overlay}>{props.children}</div>;
}

export default Overlay;
