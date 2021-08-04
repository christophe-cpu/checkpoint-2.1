import React from 'react';
import {Link} from 'react-router-dom';
import'./HeroCard.css';

function HeroCard({heroe, deleteHeroe}) {
    return (
        <div className="HeroCard">
            <Link to ={{pathname: `/${heroe.name}`}} >
                <h2>{heroe.name}</h2>
            </Link>
            <img className="image" src={heroe.image} alt="heroe.name" />
            <button onClick = {()=> deleteHeroe(heroe.name)}>
                Delete Heroe
            </button>   
        </div>
    )
}

export default HeroCard
