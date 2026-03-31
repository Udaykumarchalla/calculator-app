import React,{useState} from "react";
import './calculator.css'

const Calculator:React.FC = ()=>{
    const [input,setInput] = useState<string>("");

    const handleClick = (value:string)=>{
        setInput((prev)=>prev+value);
    };

    const clearInput = ()=>{
        setInput("")
    };

    const calculate = ()=>{
        try{
            const result = eval(input);
            setInput(result.toString());
        }catch{
            setInput("Error")
        }
    };

    return(
        <div className="calculator">
            <input className="display" value={input} readOnly />

            <div className="buttons">
                <button onClick={clearInput}>C</button>
                <button onClick={() => handleClick("/")}>/</button>
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={() => handleClick("-")}>-</button>

                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("+")}>+</button>

                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>

                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>

                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={() => handleClick(".")}>.</button>
                <button className="equals" onClick={calculate}>=</button>
            </div>
        </div>
    )
}

export default Calculator;