import React from "react";


import "./assets.css"


const RadioSide = (props) =>{
        return (
            <>
                <div className="container">
                    <div className="selector">
                        <div className="selector-item">
                            <input type="radio" id="People" value="people" name="selector"
                                   onClick={(e) => props.setLink(e.target.value)} className="selector-item_radio"/>
                            <label htmlFor="People" className="selector-item_label">People</label>
                        </div>
                        <div className="selector-item">
                            <input type="radio" id="Planets" value="planets" name="selector"
                                   onClick={(e) =>  props.setLink(e.target.value)}
                                   className="selector-item_radio"/>
                            <label htmlFor="Planets" className="selector-item_label">Planets</label>
                        </div>
                        <div className="selector-item">
                            <input type="radio" id="Starships" value="starships" name="selector"
                                   onClick={(e) =>  props.setLink(e.target.value)}
                                   className="selector-item_radio"/>
                            <label htmlFor="Starships" className="selector-item_label">Starships</label>
                        </div>
                    </div>
                </div>
            </>
        )

}
export default RadioSide