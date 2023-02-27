import React from "react";

import Planet from "../../img/starship.png";


const CurrentStarship =(props)=> {
        return (
            <>
                <div className="people__photo">
                    <img src={Planet ? Planet : Planet} alt=""/>
                </div>
                <div className="people__disc">
                    <h3>{props.currentStarship.name}</h3>
                    <p>Model : {props.currentStarship.model}</p>
                    <p>Cost : {props.currentStarship.cost_in_credits}</p>
                    <p>Passengers : {props.currentStarship.passengers}</p>

                </div>
            </>
        )
}

export default CurrentStarship