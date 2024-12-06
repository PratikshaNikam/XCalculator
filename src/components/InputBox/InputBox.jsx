import React,{useState} from 'react';
import styles from "../InputBox/InputBox.module.css";

const InputBox = (props) => {
  const [input, setInput] = useState(0);
  // console.log(input)
  
  
  return (
    <div >
      <input type="text" className={styles.input}  value={ props.value} />
    </div>
  )
}

export default InputBox;