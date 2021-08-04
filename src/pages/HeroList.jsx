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

    const handelete =(name)=> {setHeroes(heroes.filter(heroe=>heroe.name !== name))
    }

    return (
        <div className="HeroList"> 
            {heroes.map ((heroe)=> 
                <div key={heroe.id}>
                    <HeroCard heroe={heroe}  deleteHeroe={handelete} />
                    

                </div>  
            )}            
        </div>
    )
}

export default HeroList;
