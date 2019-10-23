import React, { useState } from "react";
import OperatorsButton from "./OperatorButton";
import { operators } from "../../../data";


//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  const [operatorState, setOperatorState] = useState(operators);

  
  return (
    <div className = "operators">
    
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorState.map ((button, index, value) => (
        <OperatorsButton key= {index} button={button} value={value}/>))}
    </div>
  );
};

export default Operators;
