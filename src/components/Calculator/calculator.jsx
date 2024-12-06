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
      //setInput("") 
      calculateOutput()
    }
    else {
      setInput(input+value)
    }


    
    
    
  }
  
  const calculateOutput = () => {
    if (input === "0/0") {
      setOutput(NaN)
    }
    else if (input.includes("/0")) {
      setOutput("Infinity")
    }
    else if (input === "") {
      setOutput("Error")
    }
    else {
      try { setOutput(eval(input)) }
      catch (error) {
        alert("Enter valid data")
      }
    }
  }
  
  return (
    <div>
      <input type="text" className={styles.input}  value={ input} />
      <div >{output}</div>
      
      <div className={styles.subContainer}>
      <div >
        <button onClick={() => handleClick("7")} className={styles.button} value="7">7</button>
        <button onClick={() => handleClick("8")} className={styles.button} value="8">8</button>
        <button onClick={() => handleClick("9")} className={styles.button} value="9">9</button>
        <button onClick={()=>handleClick("+")} className={styles.button} value="+">+</button>
      </div>

      <div >
        <button onClick={() => handleClick("4")} className={styles.button} value="4">4</button>
        <button onClick={() => handleClick("5")} className={styles.button} value="5">5</button>
        <button onClick={() => handleClick("6")} className={styles.button}value="6">6</button>
        <button onClick={()=>handleClick("-")} className={styles.button} value="-">-</button>
      </div>

      <div >
        <button onClick={() => handleClick("1")} className={styles.button} value="7">1</button>
        <button onClick={() => handleClick("2")} className={styles.button} value="2">2</button>
        <button onClick={() => handleClick("3")} className={styles.button} value="3">3</button>
        <button onClick={()=>handleClick("*")} className={styles.button} value="*">*</button>
      </div>

      <div >
        <button onClick={() => handleClick("C")} className={styles.button} value="C">C</button>
        <button onClick={() => handleClick("0")} className={styles.button} value="0">0</button>
        <button onClick={() => handleClick("=")} className={styles.button} value="=">=</button>
        <button onClick={()=>handleClick("/")} className={styles.button} value="/">/</button>
      </div>
      </div>
      </div>
     
  )
}

export default Calculator;