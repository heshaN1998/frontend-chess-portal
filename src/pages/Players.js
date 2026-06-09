import React,{useEffect,useState} from "react";
import api from "../api/axiosConfig"
import { Table,TableHead,TableRow,TableCell,TableBody,Button,Container,Modal,Box, TextField, Divider} from "@mui/material";

function Players(){
    const[players,setPlayers]=useState([]);
    const[selectedPlayer,setSelectedPlayer]=useState(null);
    const [open,setOpen]=useState(false);
    const [search,setSearch]=useState("");
    const [country,setCountry]=useState("");
    const[level,setLevel]=useState("");

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
        await api.put(`/api/Players/${selectedPlayer.id}`,selectedPlayer);
        setOpen(false)
        loadPlayers();
    }

    const loadPlayers=async()=>{
        const res=await api.get("/api/Players");
        setPlayers(res.data);
    };
    const deletePlayer=async(id)=>{
        await api.delete(`/api/Players/${id}`);
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
                        <TableCell>Name</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>FIDE Rating</TableCell>
                        <TableCell>Level</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filteredPlayers.map((p)=>(<TableRow  key={p.id}>
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