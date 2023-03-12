import './App.css';
import Login from './Pages/Login';
import { BrowserRouter } from 'react-router-dom';
import Signup from './Pages/Signup';
import {Routes,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/signup" element={<Signup />} ></Route>
      </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
