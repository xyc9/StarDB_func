import React from "react";

import Planet from "../../img/planet.png";


const CurrentPlanet = (props) => {

    return (
        <>
            <div className="people__photo">
                <img src={Planet ? Planet : Planet} alt=""/>
            </div>
            <div className="people__disc"><h3>{props.currentPlanet.name}</h3>
                <p>Population : {props.currentPlanet.population}</p>
                <p>Terrain : {props.currentPlanet.terrain}</p>
                <p>Climate : {props.currentPlanet.climate}</p>
            </div>
        </>
    )

}

export default CurrentPlanet