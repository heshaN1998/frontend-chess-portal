import React,{useEffect,useState} from "react";
import api,{API_BASE_URL} from "../api/axiosConfig"
import { Table,TableHead,TableRow,TableCell,TableBody,Button,Container,Modal,Box, TextField, Divider, Avatar, CircularProgress} from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";


const getPhotoUrl=(profilePictureUrl)=>profilePictureUrl? `${API_BASE_URL}${profilePictureUrl}`:undefined;

function Players(){
    const[players,setPlayers]=useState([]);
    const[selectedPlayer,setSelectedPlayer]=useState(null);
    const [open,setOpen]=useState(false);
    const [search,setSearch]=useState("");
    const [country,setCountry]=useState("");
    const[level,setLevel]=useState("");
     const[stats,setStats]=useState(null);
    const[uploading,setUploading]=useState(false);

    const uploadPhoto=async(file)=>{
        if(!file || !selectedPlayer) return;
        const formData=new FormData();
        formData.append("file",file);
        try{
            setUploading(true);
            const res=await api.post(`/api/players/${selectedPlayer.id}/photo`,formData,{
                headers:{"Content-Type":"multipart/form-data"}
            });
            setSelectedPlayer(res.data);
            loadPlayers();
        }catch(error){
            alert(error.response?.data?.message || "Failed to upload photo");
        }finally{
            setUploading(false);
        }
    };

    const handlePhotoChange=(e)=>{
        uploadPhoto(e.target.files[0]);
    };

    useEffect(()=>{
        loadPlayers();},[]
    );
    const handleEdit=(player)=>{
        setSelectedPlayer(player);
        setOpen(true);
    }
    const handleChange=(e)=>{
        setSelectedPlayer((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }));
    };
    const updatePlayer=async()=>{
        await api.put(`/api/players/${selectedPlayer.id}`,selectedPlayer);
        setOpen(false)
        loadPlayers();
    }

    const loadPlayers=async()=>{
        try{
        const res=await api.get("/api/players");
        setPlayers(res.data);}
        catch(error){
            console.log("Status:",error.response?.status);
            console.log("Data:",error.response?.data);
            console.log(error);
        }
    };
    const deletePlayer=async(id)=>{
        await api.delete(`/api/players/${id}`);
        loadPlayers();
    };
    const filteredPlayers=players.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase()))
    .filter((p)=>(country? p.country===country:true))
    .filter((p)=>(level? p.level===level:true));
    return(
        <Container style={{marginTop:"40px"}}>
            
            <h2>Player List</h2>
            <div style={{marginBottom:"20px"}}>
                <input placeholder="Search by name" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                <select onChange={(e)=>setCountry(e.target.value)}>
                    <option value="">All Cuntries</option>
                    <option value="Norway">Norway</option>
                    <option value="Srilanka">Srilanka</option>
                    <option value="USA">USA</option>
                </select>

                <select onChange={(e)=>setLevel(e.target.value)}>
                    <option value="">All Levels</option>
                    <option value="BEGINNER">BEGINNER</option>
                    <option value="INTERMEDIATE">INTERMEDIATE</option>
                    <option value="EXPERT">EXPERT</option>

                </select>
                <button onClick={()=>loadPlayers()}>
                    Reset
                </button>
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Photo</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>FIDE Rating</TableCell>
                        <TableCell>Level</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredPlayers.map((p)=>(<TableRow  key={p.id}>
                        <TableCell>
                            <Avatar src={getPhotoUrl(p.profilePictureUrl)}>{p.name?.[0]}</Avatar>
                        </TableCell>
                        <TableCell>{p.name}</TableCell>
                        <TableCell>{p.country}</TableCell>
                        <TableCell>{p.fideRating}</TableCell>
                        <TableCell>{p.level}</TableCell>
                        

                        <TableCell sx={{display:"flex",gap:1}}>
                            <Button color="primary" onClick={()=>handleEdit(p)}>Edit Details</Button>
                            <Button color="error" onClick={()=>deletePlayer(p.id)}>Delete</Button>
                            
                        </TableCell>
                    </TableRow>))}
                
                </TableBody>
            </Table>
            <Modal open={open} onClose={()=>setOpen(false)}>
                <Box sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:400,bgcolor:"white",p:3,boxShadow:24}}>
                        <h3>Edit Player Details</h3>
                
                {selectedPlayer &&(
                    <>
                <Box display="flex" flexDirection="column" alignItems="center" gap={1} mb={2}>
                    <Avatar src={getPhotoUrl(selectedPlayer.profilePictureUrl)} sx={{width:80,height:80}}>
                        {selectedPlayer.name?.[0]}
                    </Avatar>
                    <Button component="label" size="small" startIcon={uploading? <CircularProgress size={16}/> : <PhotoCameraIcon/>} disabled={uploading}>
                        {uploading? "Uploading...":"Change Photo"}
                        <input type="file" hidden accept="image/png, image/jpeg, image/webp" onChange={handlePhotoChange}/>
                    </Button>
                </Box>
                <TextField fullWidth name="name" value={selectedPlayer?.name|| ""} onChange={handleChange} margin="normal"/>
                <TextField fullWidth name="country" value={selectedPlayer?.country|| ""} onChange={handleChange} margin="normal"/>
                <TextField fullWidth name="fideRating" value={selectedPlayer?.fideRating|| ""} onChange={handleChange} margin="normal"/>
                <TextField fullWidth name="experienceYears" value={selectedPlayer?.experienceYears|| ""} onChange={handleChange} margin="normal"/>
                <Button variant="contained" onClick={updatePlayer}>Update</Button>
                </>
                )}
                
            </Box>
            </Modal>
        </Container>
        
    );
}
export default Players;