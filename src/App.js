import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import Output from './components/Output/Output';


function App() {
  return (
    <div className="App">
      <Title title="React Calculator" />
      <InputBox />
      <Output />
      <div>
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
        <Button name="+" />
      </div>

      <div>
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
        <Button name="-" />
      </div>

      <div>
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
        <Button name="*" />
      </div>

      <div>
      <Button name="C" />
      <Button name="0" />
      <Button name="=" />
        <Button name="/" />
      </div>
      
    </div>
  );
}

export default App;
