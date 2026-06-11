import React,{useState} from "react"
import api from "../api/axiosConfig"
import { TextField,Button,Container,Typography,Card,CardContent,Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login(){
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const loginHandle=async()=>{
        try {
            const res=await api.post("/auth/security/login",{userName,password});
            localStorage.setItem("token",res.data);
            alert("Login Successfuly");
            navigate("/dashbord");
        } catch (error) {
            alert("Login failed")
        }
    };
    return(
            <Container maxWidth="sm">
             <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <Card sx={{width:"100%",padding:2}}>
                    <CardContent>
            <Typography variant="h4" gutterBottom textAlign="center">
                Chess Portal Login
            </Typography>
                <TextField fullWidth label="User Name"  value={userName} margin="normal" onChange={(e)=>setUserName(e.target.value)}/>
                <TextField fullWidth label="Password" type="password" value={password} margin="normal" onChange={(e)=>setPassword(e.target.value)}/>
                <Button sx={{marginTop:2}} fullWidth variant="contained" onClick={loginHandle}>Login</Button>
            </CardContent>
            </Card>
            </Box>
            </Container>

    );
}
export default Login;