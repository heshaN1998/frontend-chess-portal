import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
import Players from './pages/Players';
import AddPlayer from './pages/AddPlayer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './pages/Register'
import Dashbord from './pages/Dashbord';
import Footer from './components/Footer';


function App() {
  return (
    
    <BrowserRouter>
    <div style={{
      minHeight:"100vh",display:"flex",flexDirection:"column"
    }}>
    
    <Navbar/>  
    <div style={{flex:1}}>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/players" element={<Players/>}/>
      <Route path="/add-Player" element={<AddPlayer/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashbord" element={<Dashbord/>}/>
      {/* <Route path="/footer" element={<Footer/>}/> */}
    </Routes>
    </div>
    <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
