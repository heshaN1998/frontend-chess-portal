import React,{useState} from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { TextField,Button,Container,Typography,Box } from "@mui/material";

function AddPlayer(){
    const navigate=useNavigate();
    const[player,setPlayer]=useState({
        name:"",
        country:"",
        age:"",
        fideRating:"",
        experienceYears:"",
        level:""
    });
    const handleChange=(e)=>{
        setPlayer({
            ...player,[e.target.name]:e.target.value
        });

    };
    const savePlayer=async()=>{
        
        await api.post("/api/Players",player);
        alert("Player Saved");
        navigate("/Players");
        
        
    };
    return(
        <Container maxWidth="sm" style={{ margin:"40px" }}>
            <Typography variant="h4" gutterBottom>
                Add New Player
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
            <TextField label="Name" name="name" onChange={handleChange} fullWidth/>
            <TextField label="Country" name="country" onChange={handleChange} fullWidth/>
            <TextField label="Age" name="age" onChange={handleChange} fullWidth/>
            <TextField label="FIDE Rating" name="d-fideRating" onChange={handleChange} fullWidth/>
            <TextField label="Experienced Year" name="experienceYear" onChange={handleChange} fullWidth/>
            <TextField label="Level(BEGINNER|INTERMEDIATE|EXPERT" name="level" onChange={handleChange} fullWidth/>

            <Button variant="contained" color="primary" onClick={savePlayer}>
                Save Player
            </Button>

            
            </Box>
        </Container>
    );
}
export default AddPlayer;