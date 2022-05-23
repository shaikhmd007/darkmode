import logo from './logo.svg';
import react, {useState} from 'react';
import './App.css';

function App() {
const btext = "Dark Mode" 
const [buttonText, setButtonText] = useState(btext);

const ptext = "Light Mode" 
const [paraText, setpText] = useState(ptext);

const [style, setStyle] = useState("cont");
function toggleButton() {
  if(buttonText=="Light Mode"){
    setButtonText("Dark Mode");
    setpText('Light Mode');
    changeStyle('cont');
  }else{
    setButtonText("Light Mode");
    setpText('Dark Mode');
    changeStyle('cont2');
  }
}
const changeStyle = (colorname) => {
  setStyle(colorname);
};

  return (
    <div className="App">
      <button onClick={toggleButton}>{buttonText}</button>
      <div className={style}>
        <h1>This is {paraText}</h1>
      </div>
    </div>
  );
}

export default App;
