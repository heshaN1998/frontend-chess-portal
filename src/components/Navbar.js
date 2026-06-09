import { AppBar,Toolbar,Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    const navigate=useNavigate();
    const logout=()=>{localStorage.removeItem("token");
        navigate("/");
    };
    return(
        
        <AppBar position="static">
            
            <Toolbar>
                <Button color="inherit" component={Link} to ="/dashbord">
                    Dashbord
                </Button>
                <Button color="inherit" component={Link} to ="/Players">
                    Player
                </Button>

                <Button color="inherit" component={Link} to="/add-Player">
                    Add Player
                </Button>
                <Button color="inherit" component={Link} to="/register">
                    Register
                </Button>
                <Button color="inherit" onClick={logout}>
                    Logout
                </Button>
                
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;