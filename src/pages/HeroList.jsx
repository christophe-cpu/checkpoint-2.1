import React,{useState,useEffect} from 'react';
import axios from 'axios';
import HeroCard from '../components/HeroCard';


function HeroList() {
    const[heroes,setHeroes]=useState([]);
    
    useEffect(() => {
        axios
        .get('https://a.nacapi.com/Hero')
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
