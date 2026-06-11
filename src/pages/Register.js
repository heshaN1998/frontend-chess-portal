import React, {useState} from "react";
import api from"../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { Container,TextField,Typography,Button,Box } from "@mui/material";

function Register(){
const navigate=useNavigate();

const[user,setUser]=useState({
    userName:"",
    password:""
});

const handleChange=(e)=>{
    setUser({
        ...user,[e.target.name]:e.target.value
    });
};
const register =async()=>{
    try{
        await api.post("/auth/security/register",user);
        alert("Registered Success");
        navigate("/");
    }
    catch(error){
        alert("Registation failed");
    }
    
};
return(
    <Container maxWidth="sm" style={{ margin:"40px" }}>
        <Typography variant="h4" gutterBottom>
                        Create Account
        </Typography>
        <Box display="flex" flexDirection="column" gap={2}>
            <TextField fullWidth label="User Name" name="userName" margin="normal" onChange={handleChange}/>
            <TextField fullWidth label="Password" type="password" name="password" margin="normal" onChange={handleChange}/>
            <Button fullWidth variant="contained" sx={{margin:2}} onClick={register}>Register</Button>
        </Box>
    </Container>
    // <div style={{marginTop:"100px"}}>
    //     <h2>Register</h2>
    //     <input name="userName" placeholder="User Name" onChange={handleChange}/>
    //     <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
    //     <button onclick={register}>
    //         Register
    //     </button>
    // </div>
);
}
export default Register;