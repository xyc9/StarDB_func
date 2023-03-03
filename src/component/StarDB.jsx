import React, {useContext, useEffect, useState} from "react";
import RadioSide from "./assets/radioSide";
import People from "./people/People";
import Planets from "./planets/Planets";
import Starship from "./starships/Starship";
import {ClipLoader} from "react-spinners";
import {ThemeContext} from "../App";


const StarDB = () => {
    const [apiData, setApiData] = useState([]);
    const [link, setLink] = useState("people");
    const [isLoading, setIsLoading] = useState(false);
    const [currentItem, setCurrentItem] = useState("");
    const {currentTheme } = useContext(ThemeContext)


    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        }
        setApiData([]);
        setCurrentItem("")
        setIsLoading(true)
        fetch(`https://swapi.dev/api/${link}/`, requestOptions)
            .then(response => response.json())
            .then(result => setApiData(result.results))
            .then(() => setIsLoading(false))
            .catch(() => setIsLoading(false));

    }, [link]);

    const handleCurrentItem = (name) => {
        const newCurrentPeople = apiData.filter((item) => item.name === name);
        setCurrentItem(newCurrentPeople[0])
    }
    return (
        <div className={currentTheme ? "darkBody" : "lightBody"}>
            <div className="radio__side">
                <h1>StarDB : </h1>
                <RadioSide setLink={setLink}/>
            </div>
            <div>
                {link === "people" ? <People People={apiData} setCurrentPeople={handleCurrentItem}
                                             currentPeople={currentItem}/> : null}
                {link === "planets" ?
                    <Planets Planets={apiData} setCurrentPlanet={handleCurrentItem}
                             currentPlanet={currentItem}/> : null}
                {link === "starships" ?
                    <Starship Starships={apiData} setCurrentStarship={handleCurrentItem}
                              currentStarship={currentItem}/> : null}

            </div>
            <div className="preloader">
                {
                    isLoading ? <ClipLoader
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    /> : null
                }
            </div>
        </div>
    )
}

export default StarDB;