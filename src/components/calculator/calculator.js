import React, { useState } from "react";
import './calculator.scss';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleBtnClick = (e) => {
        setResult((prev) => prev + e.target.textContent);
    }

    const onDelete = () => {
        setResult(result.toString().slice(0, -1));
    }

    const reset = () => {
        setResult('');
    }

    const compute = () => {
        try {
            let res = eval(result.replace('×', '*').replace('÷', '/'));
            setResult(res);
        }
        catch (e) {
            setResult('error');
        }
    }

    return <React.Fragment>
        <div className="result-card">
            <h2>{result}</h2>
        </div>
        <section className="calculator">

            <button className="btn btnleftparanthesis" onClick={handleBtnClick}>(</button>
            <button className="btn btndecimal" onClick={handleBtnClick}>.</button>
            <button className="btn btnrightparanthesis" onClick={handleBtnClick}>)</button>
            <button className="btn btndel" onClick={onDelete}>Del</button>

            <button className="btn btn7" value="7" onClick={handleBtnClick}>7</button>
            <button className="btn btn8" value="8" onClick={handleBtnClick}>8</button>
            <button className="btn btn9" value="9" onClick={handleBtnClick}>9</button>
            <button className="btn btnadd" onClick={handleBtnClick}>+</button>

            <button className="btn btn4" value="4" onClick={handleBtnClick}>4</button>
            <button className="btn btn5" value="5" onClick={handleBtnClick}>5</button>
            <button className="btn btn6" value="6" onClick={handleBtnClick}>6</button>
            <button className="btn btndiff" onClick={handleBtnClick}>−</button>

            <button className="btn btn1" value="1" onClick={handleBtnClick}>1</button>
            <button className="btn btn2" value="2" onClick={handleBtnClick}>2</button>
            <button className="btn btn3" value="3" onClick={handleBtnClick}>3</button>
            <button className="btn btnmult" onClick={handleBtnClick}>×</button>

            <button className="btn btnreset" onClick={reset}>Reset</button>
            <button className="btn btn0" value="0" onClick={handleBtnClick}>0</button>
            <button className="btn btnequals" onClick={compute}>=</button>
            <button className="btn btndivide" onClick={handleBtnClick}>÷</button>
        </section>

    </React.Fragment>


}

export default Calculator;


