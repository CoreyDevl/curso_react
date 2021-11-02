import logo from './logo.svg';
import './App.css';
import SayMyName from "./components/SayMyName"
import Pessoa from "./components/Pessoa"
import Frase from "./components/Frase"
function App() {
 
   const name = "Melão"
  return (
    <div className="App">
 
      
      <SayMyName nome="GUERRILHA" />
      <SayMyName nome="BumBum" />
      <SayMyName nome="NaNave" />
      <SayMyName nome={name} />
      <Frase />
      <Frase />
      <Pessoa 
      nome="Umbigo"
      idade="30"
      profissao="Programador"
      foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;
