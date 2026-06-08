import React,{useState} from "react"
import api from "../api/axiosConfig"
import { TextField,Button,Container,Typography } from "@mui/material";

function Login(){
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");

    const loginHandle=async()=>{
        try {
            const res=await api.post("/auth/login",{userName,password});
            localStorage.setItem("token",res.data);
            alert("Login Successfuly");
        } catch (error) {
            alert("Login failed")
        }
    };
    return(
        <Container maxWidth="sm" style={{marginTop:"100px"}}>
            <Typography variant="h4" gutterBottom>
                Chess Portal Login
            </Typography>
                <TextField fullWidth label="userName" margin="normal" onChange={(e)=>setUserName(e.target.value)}/>
                <TextField fullWidth label="password" type="password" margin="normal" onChange={(e)=>setPassword(e.target.value)}/>
                <Button fullWidth variant="contained" onClick={loginHandle}>Login</Button>
            </Container>

    );
}
export default Login;