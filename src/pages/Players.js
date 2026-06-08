import React,{useEffect,useState} from "react";
import api from "../api/axiosConfig"
import { Table,TableHead,TableRow,TableCell,TableBody,Button,Container } from "@mui/material";

function Players(){
    const[players,setPlayers]=useState([]);
    useEffect(()=>{
        loadPlayers();},[]
    );

    const loadPlayers=async()=>{
        const res=await api.get("/api/Players");
        setPlayers(res.data);
    };
    const deletePlayer=async(id)=>{
        await api.delete(`/api/Players/${id}`);
        loadPlayers();
    };
    return(
        <Container style={{marginTop:"40px"}}>
            <h2>Player List</h2>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>Rating</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Players.map((p)=>(<TableRow>
                        <TableCell>{p.name}</TableCell>
                        <TableCell>{p.country}</TableCell>
                        <TableCell>{p.fideRating}</TableCell>
                        <TableCell>
                            <Button color="error" onClick={()=>deletePlayer(p.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>))}
                </TableBody>
            </Table>

        </Container>
    );
}
export default Players;