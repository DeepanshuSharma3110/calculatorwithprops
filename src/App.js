import style from "./app.module.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [prevNo, setPrevNo] = useState("");
  const [result, setResult] = useState();
  const [operator, setOperator] = useState("");


  console.log(
    `First No: ${prevNo}, Operation: ${operator}, Second No: ${input}, Result: ${result}`
  );

  
  const handleClick = (val) => {
    setInput(input + val);
  };

  const handleOperation = (operation) => {
    if (input !== "") {
      if (prevNo !== "" && operator !== "") {
        handleEquals();
      } else {
        setPrevNo(parseFloat(input));
        setInput("");
        setOperator(operation);
      }
    }
  };

  const handleClear = () => {
    setInput("");
    setPrevNo("");
    setResult();
    setOperator("");
  };

  const handleEquals = () => {
    if (prevNo !== "" && input !== "" && operator !== "") {
      let newResult;
      switch (operator) {
        case "+":
          newResult = parseFloat(prevNo) + parseFloat(input);
          break;
        case "-":
          newResult = parseFloat(prevNo) - parseFloat(input);
          break;
        case "*":
          newResult = parseFloat(prevNo) * parseFloat(input);
          break;
        case "/":
          newResult = parseFloat(prevNo) / parseFloat(input);
          break;
        default:
          break;
      }
      setResult(newResult);
      setInput(newResult);  
      setPrevNo("");
      setOperator("");
    }
  };

  return (
    <div className={style.app}>
      <div className={style.calculator}>
        <div className={style.display}>{input || result || "0"}</div>
        <div className={style.buttons}>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleOperation("+")}>+</button>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleOperation("-")}>-</button>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleOperation("*")}>*</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={() => handleOperation("/")}>/</button>
          <button onClick={handleEquals}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
