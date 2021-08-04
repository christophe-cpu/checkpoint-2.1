import React from 'react';
import {Link} from 'react-router-dom';
import'./HeroCard.css';

function HeroCard({heroe}) {
    return (
        <div className="HeroCard">
            <Link to ={{pathname: `/$ heroe.id`}} >
                <h2>{heroe.name}</h2>
            </Link>
            <img className="heroe-picture" src={heroe.image} alt="heroe.name" />
            
        </div>
    )
}

export default HeroCard
