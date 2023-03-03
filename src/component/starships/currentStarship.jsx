import React, {useContext} from "react";
import Planet from "../../img/starship.png";
import {LangContext} from "../../App";


const CurrentStarship =(props)=> {
    const {currentLang} = useContext(LangContext)
        return (
            <>
                <div className="people__photo">
                    <img src={Planet ? Planet : Planet} alt=""/>
                </div>
                <div className="people__disc">
                    <h3>{props.currentStarship.name}</h3>
                    <p>{currentLang==="od" ? "Модель" : "Model"} : {props.currentStarship.model}</p>
                    <p>{currentLang==="od" ? "Цена" : "Cost"} : {props.currentStarship.cost_in_credits}</p>
                    <p>{currentLang==="od" ? "Пассажиры" : "Passengers"} : {props.currentStarship.passengers}</p>

                </div>
            </>
        )
}

export default CurrentStarship