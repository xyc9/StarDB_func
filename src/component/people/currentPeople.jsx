import React, {useContext} from "react";
import Avatar from "../../img/avatar.png";
import {LangContext} from "../../App";



const CurrentPeople = (props)=> {
    const {currentLang} = useContext(LangContext)
        return(
            <>
                <div className="people__photo">
                    <img src={Avatar ? Avatar : Avatar} alt=""/>
                </div>
                <div className="people__disc">
                    <h3>{props.currentPeople.name}</h3>
                    <p>{currentLang==="od" ? "Пол" :"Gender"} : {props.currentPeople.gender}</p>
                    <p>{currentLang==="od" ? "Год Рождения" :"Birth Year"}: {props.currentPeople.birth_year}</p>
                    <p>{currentLang==="od" ? "Цвет Глаз" :"Eye color"} : {props.currentPeople.eye_color}</p>
                    <p>{currentLang==="od" ? "Рост" :"Height"} : {props.currentPeople.height}</p>
                    <p>{currentLang==="od" ? "Вес" :"Mass"} : {props.currentPeople.mass}</p>
                </div>
            </>
        )
}
export default CurrentPeople