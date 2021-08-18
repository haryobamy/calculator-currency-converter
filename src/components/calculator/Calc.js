import React from "react";
import Footer from "../footer/Footer";
import "./calc.css";

const Calc = () => {
  const [result, setResult] = React.useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const handleDelete = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <>
      <div className="cal-container">
        <div className="calc-container">
          <form>
            <input type="text" className="display" value={result} />
          </form>
          <div className="keypad">
            <button onClick={clear} id="clear">
              Clear
            </button>
            <button onClick={handleDelete} id="backspace">
              C
            </button>
            <button onClick={handleClick} name="/">
              &divide;
            </button>
            <button onClick={handleClick} name="7">
              7
            </button>
            <button onClick={handleClick} name="8">
              8
            </button>
            <button onClick={handleClick} name="9">
              9
            </button>
            <button onClick={handleClick} name="*">
              &times;
            </button>
            <button onClick={handleClick} name="4">
              4
            </button>
            <button onClick={handleClick} name="5">
              5
            </button>
            <button onClick={handleClick} name="6">
              6
            </button>
            <button onClick={handleClick} name="-">
              &ndash;
            </button>
            <button onClick={handleClick} name="1">
              1
            </button>
            <button onClick={handleClick} name="2">
              2
            </button>
            <button onClick={handleClick} name="3">
              3
            </button>
            <button onClick={handleClick} name="+">
              +
            </button>
            <button onClick={handleClick} name="0">
              0
            </button>
            <button onClick={handleClick} name=".">
              .
            </button>
            <button onClick={calculate} id="result">
              =
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calc;
