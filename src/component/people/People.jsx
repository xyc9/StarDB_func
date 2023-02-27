import React from "react";
import {v4 as uuidv4} from 'uuid';
import CurrentPeople from "./currentPeople";

import "./People.css"


const People = (props) => {

    return (

        <div className="people__wrap">
            <div className="people__list">
                {props.People.map(item => {
                    return (
                        <button key={uuidv4()}
                                onClick={(e) => props.setCurrentPeople(item.name)}>{item.name}</button>
                    )
                })}
            </div>
            <div className="people__single">
                {props.currentPeople ? <CurrentPeople currentPeople={props.currentPeople}/> : null}
            </div>
        </div>
    )

}

export default People;
