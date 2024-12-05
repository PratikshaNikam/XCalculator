import React,{useState} from 'react';
import styles from "../InputBox/InputBox.module.css";

const InputBox = () => {
  const [input, setInput] = useState(0);
  console.log(input)
  return (
    <div >
      <input type="text" className={styles.input} onChange={(e)=>setInput(e.target.value)} />
    </div>
  )
}

export default InputBox;