import React,{useState} from "react";
import api from "../api/axiosConfig";
import { useNavigate } from "react-router-dom";
import { TextField,Button,Container,Typography,Box,Avatar,CircularProgress } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

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
    const[photoFile,setPhotoFile]=useState(null);
    const[photoPreview,setPhotoPreview]=useState(null);
    const[saving,setSaving]=useState(false);

    const handleChange=(e)=>{setPlayer({...player,[e.target.name]:e.target.value});};
    
    const handlePhotoChange=(e)=>{
        const file=e.target.files[0];
        if(!file) return;
        setPhotoFile(file);
        setPhotoPreview(URL.createObjectURL(file));
    };
    const savePlayer=async()=>{
        setSaving(true);
        try{
            const res=await api.post("/api/players",player);
            const newPlayerId=res.data.id;
            if(photoFile){
                const formData=new FormData();
                formData.append("file",photoFile);
                await api.post(`/api/players/${newPlayerId}/photo`,formData,{
                    headers:{"Content-Type":"multipart/form-data"}
                });
            }

            alert("Player Saved");
            navigate("/Players");
        }catch(error){
            alert(error.response?.data?.message || "Failed to save player");
        }finally{
            setSaving(false);
        }
    };
    return(
        <Container maxWidth="sm" style={{ margin:"40px" }}>
            <Typography variant="h4" gutterBottom>
                Add New Player
            </Typography>
            <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" flexDirection="column" alignItems="center" gap={1} mb={1}>
                   <Avatar src={photoPreview} sx={{width:80,height:80}}>
                    {player.name?.[0]}
                </Avatar>
                <Button component="label" size="small" startIcon={<PhotoCameraIcon/>}>{photoFile? "Change Photo":"Add Photo"}
                    <input type="file" hidden accept="image/png, image/jpeg, image/webp" onChange={handlePhotoChange}/>
                </Button>
            </Box>

            <TextField label="Name" name="name" onChange={handleChange} fullWidth/>
            <TextField label="Country" name="country" onChange={handleChange} fullWidth/>
            <TextField label="Age" name="age" onChange={handleChange} fullWidth/>
            <TextField label="FIDE Rating" name="fideRating" onChange={handleChange} fullWidth/>
            <TextField label="Experienced Year" name="experienceYears" onChange={handleChange} fullWidth/>
            <TextField label="Level(BEGINNER|INTERMEDIATE|EXPERT" name="level" onChange={handleChange} fullWidth/>

            <Button variant="contained" color="primary" onClick={savePlayer} disabled={saving} startIcon={saving? <CircularProgress size={16}/> : null}>
                {saving? "Saving...":"Save Player"}
            </Button>         
            </Box>
        </Container>
    );
}
export default AddPlayer;