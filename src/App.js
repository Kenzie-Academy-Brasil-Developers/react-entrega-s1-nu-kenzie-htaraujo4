import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login/index.js';
import Home from './components/Home/index.js';

function App() {
  const [login , setLogin] = useState(false);
  const useLogin = () => {
    setLogin(true);
  }
  if(login === false){
    return(
      <header className="App-header">
      <Login isLogin={useLogin}/>
      </header>

    )}
    else{
      return(
        <Home/>
      )
    }
}
export default App;
