import { AppBar,Toolbar,Button, Typography, BottomNavigationAction, Box, Autocomplete } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function Navbar(){
    const navigate=useNavigate();
    const logout=()=>{localStorage.removeItem("token");
        navigate("/");
    };
    return(
        
        <AppBar position="static">
            
            <Toolbar >
            <Typography sx={{fontFamily:"math", fontSize:"36px"}}>♞Chess Portal</Typography>
            <Box sx={{marginLeft:"auto",display:"flex", fontFamily:"monospace"}}>
                <Button
                    color="inherit"
                    component="a"
                    href="https://lichess.org"
                    target="_blank">
                    Lichess
                </Button>
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
                </Box>
                
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;