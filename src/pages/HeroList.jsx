import React,{useState,useEffect} from 'react';
import axios from 'axios';
import HeroCard from '../components/HeroCard';


function HeroList() {
    const[heroes,setHeroes]=useState([]);
    
    useEffect(() => {
        axios
        .get('https://lit-badlands-40023.herokuapp.com/heros')
        .then((res)=>res.data)
        .then((data)=>setHeroes(data))
    }, [])

    return (
        <div className="HeroList"> 
            {heroes.map ((heroe)=> 
                <div key={heroe.id}>
                    <HeroCard heroe={heroe} />
                </div>  
            )}             
        </div>
    )
}

export default HeroList;
