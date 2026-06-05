import React,{useState} from "react"
import api from "../api/axiosConfig"

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
        <div>
            <h2>Login</h2>
            <input placeholder="UserName" onChange={(e)=>setUserName(e.target.value)}/>
        <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={loginHandle}>Login</button>
        </div>

    );
}
export default Login;