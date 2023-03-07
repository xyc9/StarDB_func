import React, {useContext} from "react";
import {LangContext} from "../../App";

import "./assets.css"
import {Link} from "react-router-dom";


const RadioSide = (props) => {
    const {currentLang} = useContext(LangContext)
    return (
        <>
            <div className="container">
                <div className="selector">
                    <div className="selector-item">
                        <Link className="link__btn" to="/">{currentLang === "od" ? "Главная" : "Home"}</Link>
                    </div>
                    <div className="selector-item">
                        <Link className="link__btn" to="/login">{currentLang === "od" ? "Авторизация" : "Login"}</Link>
                    </div>
                    <div className="selector-item">
                        <Link className="link__btn" to="/people"
                              onClick={() => props.setLink("people")}>{currentLang === "od" ? "Персонажи" : "People"}</Link>
                    </div>
                    <div className="selector-item">
                        <Link className="link__btn" onClick={() => props.setLink("planets")}
                              to="/planets">{currentLang === "od" ? "Планеты" : "Planets"}</Link>
                    </div>
                    <div className="selector-item">
                        <Link className="link__btn" onClick={() => props.setLink("starships")}
                              to="/starships">{currentLang === "od" ? "Корабли" : "Starships"}</Link>
                    </div>

                </div>
            </div>
        </>
    )

}
export default RadioSide