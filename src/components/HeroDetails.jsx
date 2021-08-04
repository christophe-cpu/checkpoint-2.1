import React, {useState,useEffect} from 'react';
import axios from 'axios';
import{ Link} from'react-router-dom';





function HeroDetails(props){

        const [height, setHeight] = useState();
        const heroeName = props.match.params.name
    
        useEffect(() => {
            axios
            .get(`https://apis.wilders.dev/wild-games/games/${heroeName}`)
            .then((res) => {
                setHeight(res.data.height)
            })
        }, [heroeName])
    return (
        <div className='HeroDetails'>
            <Link to={{pathname: `/`}} >Go back to homepage </Link>
        </div>
    )
}

export default HeroDetails
