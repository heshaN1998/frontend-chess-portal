import React, {useState} from "react";
import api from"../api/axiosConfig";
import { useNavigate } from "react-router-dom";

function Register(){
const navigate=useNavigate();

const[user,setUser]=useState({
    userName:"",
    passwoad:""
});

const handleChange=(e)=>{
    setUser({
        ...user,[e.target.name]:e.target.value
    });
};
const register =async()=>{
    try{
        await api.post("/auth/register",user);
        alert("Registered Success");
        navigate("/");
    }
    catch(error){
        alert("Registation failed");
    }
    
};
return(
    <div style={{marginTop:"100px"}}>
        <h2>Register</h2>
        <input name="userName" placeholder="User Name" onChange={handleChange}/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange}/>
        <button onclick={register}>
            Register
        </button>
    </div>
);
}
export default Register;