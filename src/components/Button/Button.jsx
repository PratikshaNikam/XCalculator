import React,{useState} from 'react';
import styles from "../Button/Button.module.css";

const Button = (props) => {

  
 


  function handleClick(event) {
    const value = event.target.value;
    console.log(value);
  }
  return (
    <button className={styles.button}  onClick={props.onClick} value={props.value}>{ props.value}</button>
  )
}

export default Button;