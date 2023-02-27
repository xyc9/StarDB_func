import React from "react";


import Avatar from "../../img/avatar.png";



const CurrentPeople = (props)=> {
        return(
            <>
                <div className="people__photo">
                    <img src={Avatar ? Avatar : Avatar} alt=""/>
                </div>
                <div className="people__disc">
                    <h3>{props.currentPeople.name}</h3>
                    <p>gender : {props.currentPeople.gender}</p>
                    <p>Birth Year : {props.currentPeople.birth_year}</p>
                    <p>Eye color : {props.currentPeople.eye_color}</p>
                    <p>Height : {props.currentPeople.height}</p>
                    <p>Mass : {props.currentPeople.mass}</p>
                </div>
            </>
        )
}
export default CurrentPeople