import { AppBar,Toolbar,Button } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <AppBar position="static">
            
            <Toolbar>
                <Button color="inherit" component={Link} to ="/Players">
                    Player
                </Button>

                <Button color="inherit" component={Link} to="/add-Player">
                    Add Player
                </Button>
                <Button color="inherit" component={Link} to ="/">
                    Logout
                </Button>
            </Toolbar>
        </AppBar>
    );
}
export default Navbar;