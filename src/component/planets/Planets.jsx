import React from "react";
import {v4 as uuidv4} from 'uuid';
import CurrentPlanet from "./currentPlanet";

import "./Planets.css"


const Planets = (props) => {

    return (

        <div className="people__wrap">
            <div className="people__list">
                {props.Planets.map(item => {
                    return (
                        <button key={uuidv4()}
                                onClick={() => props.setCurrentPlanet(item.name)}>{item.name}</button>
                    )
                })}
            </div>
            <div className="people__single">
                {props.currentPlanet ? <CurrentPlanet currentPlanet={props.currentPlanet}/> : null}
            </div>
        </div>
    )

}

export default Planets;
