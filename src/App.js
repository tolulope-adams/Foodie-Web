import {BrowserRouter,Routes,Route} from "react-router-dom";

import './App.css';

import Home from './home';
import Authentication from './authentication';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Authentication/>} />
        </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
