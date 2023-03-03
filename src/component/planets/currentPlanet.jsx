import React, {useContext} from "react";
import Planet from "../../img/planet.png";
import {LangContext} from "../../App";


const CurrentPlanet = (props) => {
    const {currentLang} = useContext(LangContext)
    return (
        <>
            <div className="people__photo">
                <img src={Planet ? Planet : Planet} alt=""/>
            </div>
            <div className="people__disc"><h3>{props.currentPlanet.name}</h3>
                <p>{currentLang==="od" ? "Популяция" :"Population"} : {props.currentPlanet.population}</p>
                <p>{currentLang==="od" ? "Местность" :"Terrain"} : {props.currentPlanet.terrain}</p>
                <p>{currentLang==="od" ? "Климат" :"Climate"} : {props.currentPlanet.climate}</p>
            </div>
        </>
    )

}

export default CurrentPlanet