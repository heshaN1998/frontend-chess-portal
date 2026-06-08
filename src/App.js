import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import Players from './pages/Players';
import AddPlayer from './pages/AddPlayer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './pages/Register';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>  
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/players" element={<Players/>}/>
      <Route path="/add-Player" element={<AddPlayer/>}/>
      <Route path="register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
