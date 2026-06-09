import React,{useEffect,useState} from "react"
import api from "../api/axiosConfig"
import { Container,Card,Typography } from "@mui/material"

function Dashbord(){
    const[stats,setStats]=useState(null);

    useEffect(()=>{
        loadStats();},[]);
    

const loadStats=async()=>{
    const res=await api.get("/api/dashbord/stats");
    setStats(res.data);
};
if(!stats) return<Typography style={{fontFamily:"cursive"}}>Dashbord is Loading....</Typography>
return(
<Container style={{margin:"40px"}}>
    <Typography>
        Chess Portal Dashbord
    </Typography>
<Card style={{padding:"20px",marginBottom:"20px"}}>
    <h3>Total Player</h3>
    <h1>{stats.totalPlayers}</h1>
</Card>

<Card style={{padding:"20px",marginBottom:"20px"}}>
    <h3>Average Rating</h3>
    <h1>{stats.averageRating}</h1>
</Card>

<Card style={{padding:"20px"}}>
    <h3>Top Player</h3>
    <p>Name:{stats.topPlayer?.name}</p>
    <p>Country:{stats.topPlayer?.country}</p>
    <p>FIDE Rating:{stats.topPlayer?.fideRating}</p>
</Card> 
</Container>
);
}

export default Dashbord;