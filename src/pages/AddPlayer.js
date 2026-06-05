import React,{useState} from "react";
import api from "../api/axiosConfig";

function AddPlayer(){
    const[player,setPlayer]=useState({
        name="",
        country="",
        age="",
        fideRating="",
        experienceYears=""
    });
    const handleChange=(e)=>{
        setPlayer({
            ...player,[e.target.name]:e.target.value
        });

    };
    const savePlayer=async()=>{
        await api.post("/api/player");
        alert("Player Saved");
    };
    return(
        <div>
            <h2>Add Players</h2>
            <input name="name" placeholder="Name" onChange={handleChange}/>
            <input name="country" placeholder="Country" onChange={handleChange}/>
            <input name="age" placeholder="Age" onChange={handleChange}/>
            <input name="fideRating" placeholder="FIDE Rating" onChange={handleChange}/>
            <input name="experienceYears" placeholder="Experience" onChange={handleChange}/>
            <button onClick={savePlayer}>Save Player</button>
        </div>
    );
}
export default AddPlayer;