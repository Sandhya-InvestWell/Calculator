import React, { useState } from "react";
import axios from "axios";
import "./media/css/style.css"

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [operand, setOperand] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/auth/data", {
        num1: parseFloat(num1),
        num2: parseFloat(num2),
        op: operand,
      });

      if (response.data.success) {
        setResult(`Result: ${response.data.ans}`);
      } else {
        setResult("Error in getting data");
      }
    } catch (error) {
      console.error("Error in submitting data:", error);
      setResult("Error in submitting data");
    }
  };

  return (
    <div className="calculator">
      <h1 className="heading"> Calculator </h1>
      <form className="formData" onSubmit={handleSubmit}>
        <label className="inputLabel" htmlFor="num1">Enter num1: </label>{" "}
        <input className="inputNum" type="number" id="num1" value={num1}
          onChange={(e) => setNum1(e.target.value)}/>
        <br />
        <label className="inputLabel"  htmlFor="operand">Enter operand: </label>{" "}
        <input className="inputNum" type="text" id="operand" value={operand}
          onChange={(e) => setOperand(e.target.value)}/>
        <br />
        <label className="inputLabel"  htmlFor="num2">Enter num2: </label>{" "}
        <input className="inputNum" type="number" id="num2" value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <br />
        <button type="submit" className="submitButton">Submit</button>
      </form>
      <h1 id="ansVal">{result}</h1>
    </div>
  );
};

export default Calculator;
