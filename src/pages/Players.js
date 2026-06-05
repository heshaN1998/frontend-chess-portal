import React,{useEffect,useState} from "react";
import api from "../api/axiosConfig"

function Players(){
    const[players,setPlayers]=useState([]);
    useEffect(()=>{
        loadPlayers();},[]
    );

    const loadPlayers=async()=>{
        const res=await api.get("/api/players");
        setPlayers(res.data);
    };
    const deletePlayer=async(id)=>{
        await api.delete(`/api/players/${id}`);
        loadPlayers();
    };
    return(
        <div>
            <h2>Players</h2>
            <ul>
                {players.map(p=>(
                    <li key={p.id}>
                        {p.name}-{p.country}-{p.fideRating}
                        <button onClick={()=>deletePlayer(p.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Players;