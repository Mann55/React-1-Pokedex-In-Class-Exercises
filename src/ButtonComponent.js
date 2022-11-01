import React from "react";

const ButtonComponent = (props) => {
  const buttonClicked = props.buttonClicked;
  return <button onClick={buttonClicked}>click me !</button>;
};

export default ButtonComponent;
