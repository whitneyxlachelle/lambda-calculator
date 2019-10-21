import React from "react";

const NumberButton = props => {
  return (
    <div>
      <button className="numbers_button">
        {/* Display a button element rendering the data being passed down from the parent container on props */}
        {props.numbers}
      </button>
    </div>
  );
};

export default NumberButton;
