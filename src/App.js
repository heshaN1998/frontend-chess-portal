import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import Players from './pages/Players';
import AddPlayer from './pages/AddPlayer';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/players" element={<Players/>}/>
      <Route path="/add-Player" element={<AddPlayer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
