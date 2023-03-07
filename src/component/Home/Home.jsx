import React, {useContext} from "react";
import {LangContext} from "../../App";


import "./Home.css"


const Home = () => {
    const {currentLang} = useContext(LangContext)
    return (
        <div className="home">
            <p>{currentLang === "od" ? "Данный сайт сделай по вселенной Звёздных воин, на нём вы можете посмотреть персонажей, планеты , а так же\n" +
                "                космические корабли из франшизы, но для начала прийдеться авторизоваться" : "Make this site in the Star Wars universe, on it you can see characters, planets, as well as\n" +
                "                spaceships from the franchise, but first you have to log in"}</p>
        </div>
    )
}
export default Home