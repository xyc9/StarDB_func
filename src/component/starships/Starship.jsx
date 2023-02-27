import React from "react";
import {v4 as uuidv4} from 'uuid';
import CurrentStarship from "./currentStarship";

import "./Starship.css"

const Starship = (props) => {

    return (

        <div className="people__wrap">
            <div className="people__list">
                {props.Starships.map(item => {
                    return (
                            <button key={uuidv4()}
                                onClick={(e) => props.setCurrentStarship(item.name)}>{item.name}</button>

                    )
                })}
            </div>
            <div className="people__single">
                {props.currentStarship ? <CurrentStarship currentStarship={props.currentStarship}/> : null}
            </div>
        </div>
    )

}

export default Starship;
