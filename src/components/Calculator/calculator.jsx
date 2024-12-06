import React, { useState } from "react";
import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";
import Output from "../Output/Output";
import styles from "../Calculator/Calculator.module.css"

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("")
  
  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
      setOutput("");
    }
    else if (value==="=") {
      setInput("") 
      calculateOutput()
    }
    else {
      setInput(input+value)
    }


    
    
    
  }
  
  const calculateOutput = () => {
    try {setOutput(eval(input)) }
    catch (error) {
      alert("Enter valid data")
    }
  }
  
  return (
    <div>
      <input value={ input} />
      <h2>{output}</h2>
      <div>
      <div >
        <button onClick={() => handleClick("7")} className={styles.button}>7</button>
        <button onClick={() => handleClick("8")} className={styles.button}>8</button>
        <button onClick={() => handleClick("9")} className={styles.button}>9</button>
        <button onClick={()=>handleClick("+")} className={styles.button}>+</button>
      </div>

      <div >
        <button onClick={() => handleClick("4")} className={styles.button}>4</button>
        <button onClick={() => handleClick("5")} className={styles.button}>5</button>
        <button onClick={() => handleClick("6")} className={styles.button}>6</button>
        <button onClick={()=>handleClick("-")} className={styles.button}>-</button>
      </div>

      <div >
        <button onClick={() => handleClick("1")} className={styles.button}>1</button>
        <button onClick={() => handleClick("2")} className={styles.button}>2</button>
        <button onClick={() => handleClick("3")} className={styles.button}>3</button>
        <button onClick={()=>handleClick("*")} className={styles.button}>*</button>
      </div>

      <div >
        <button onClick={() => handleClick("C")} className={styles.button}>C</button>
        <button onClick={() => handleClick("0")} className={styles.button}>0</button>
        <button onClick={() => handleClick("=")} className={styles.button}>=</button>
        <button onClick={()=>handleClick("/")} className={styles.button}>/</button>
      </div>
      </div>
      </div>
     
  )
}

export default Calculator;