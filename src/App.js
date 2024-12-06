import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Button from './components/Button/Button';
import InputBox from './components/InputBox/InputBox';
import Output from './components/Output/Output';
import Calculator from './components/Calculator/calculator';


function App() {
  return (
    <div className="App">
      <Title title="React Calculator" />
      
      <Calculator/>
  
      
    </div>
  );
}

export default App;
