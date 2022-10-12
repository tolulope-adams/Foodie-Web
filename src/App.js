import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './home';
import Authentication from './authentication';



function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/" element={<Authentication/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
