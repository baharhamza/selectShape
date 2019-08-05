import React, { Component } from "react";

const Shape = props => {
  // console.log("In Shape.js, testing props", props); // returns either 'square', 'circle' or 'triangle'
  // console.log("In Shape.js, testing props.shape", props.shape);
  // console.log("In Shape.js, testing props.selectShape", props.selectShape);

  const shape = props.shape; // So we can write 'shape' instead of 'props.shape' later in code- shortens code
  const selectShape = props.selectShape;

  return (
    // <div className="square"/> hard-codes all to be square
    // <div className="props.shape"/> allows dynamic, so it can be square, circle or triangle
    // objectName.keyName
    // returns value of keyName
    // BUT using props isntead of objectName
    // props.keyName
    <div className={props.shape} onClick={() => selectShape(props.shape)} />
  );
};

export default Shape

