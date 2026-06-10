import React,{useEffect,useState} from "react"
import api from "../api/axiosConfig"
import { Skeleton,CircularProgress,Container,Card,Typography,Box } from "@mui/material"

function Dashbord(){
    const[stats,setStats]=useState(null);

    useEffect(()=>{
        loadStats();},[]);
    

const loadStats=async()=>{
    try{
    const res=await api.get("/api/dashbord");
    setStats(res.data);}
    catch(err){
        console.log("Status:",err.response?.stats);
        console.log("Data:",err.response?.data);
        console.log("Message:",err.response?.message);
    }
};
// if(!stats) return<Typography style={{fontFamily:"cursive"}}>Dashbord is Loading....</Typography>
if(!stats){
    return(
        <Box sx={{ margin: 4 }}>
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="rectangular" height={100} sx={{ marginTop: 2 }} />
            <Skeleton variant="rectangular" height={100} sx={{ marginTop: 2 }} />
            <Skeleton variant="rectangular" height={100} sx={{ marginTop: 2 }} />
        </Box>
);
}
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