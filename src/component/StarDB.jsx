import React, {useEffect, useState} from "react";
import RadioSide from "./assets/radioSide";
import people from "./people/People";
import People from "./people/People";
import Planets from "./planets/Planets";
import Starship from "./starships/Starship";
import {ClipLoader} from "react-spinners";


const StarDB = () => {
    const [peoples, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [starships, setStarships] = useState([]);
    const [link, setLink] = useState("people");
    const [isLoading, setIsLoading] = useState(false);
    const [currentPeople, setCurrentPeople] = useState("");
    const [currentPlanet, setCurrentPlanet] = useState("");
    const [currentStarship, setCurrentStarship] = useState("");
    const [errorInfo, setErrorInfo] = useState("");

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    }


    useEffect(() => {
        setPeople([])
        setPlanets([])
        setStarships([])
        setIsLoading(true)
        if (link === "people") {
            fetch(`https://swapi.dev/api/${link}/`, requestOptions)
                .then(response => response.json())
                .then(result => setPeople(result.results))
                .then(result => setIsLoading(false))
                .catch(error => setIsLoading(false));
        } else if (link === "planets") {
            fetch(`https://swapi.dev/api/${link}/`, requestOptions)
                .then(response => response.json())
                .then(result => setPlanets(result.results))
                .then(result => setIsLoading(false))
                .catch(error => setIsLoading(false));
        } else if (link === "starships") {
            fetch(`https://swapi.dev/api/${link}/`, requestOptions)
                .then(response => response.json())
                .then(result => setStarships(result.results))
                .then(result => setIsLoading(false))
                .catch(error => setErrorInfo(error));
        }
    }, [link]);

    const handleCurrentPeople = (name) => {
        const newCurrentPeople = peoples.filter((item) => item.name === name);
        setCurrentPeople(newCurrentPeople[0])
    }
    const handleCurrentPlanet = (name) => {
        const newCurrentPlanet = planets.filter((item) => item.name === name);
        setCurrentPlanet(newCurrentPlanet[0])
    }
    const handleCurrentStarship = (name) => {
        const newCurrentStarship = starships.filter((item) => item.name === name);
        setCurrentStarship(newCurrentStarship[0])
    }
    return (
        <div className="appBody">
            <header>
                <h1>StarDB : </h1>
                <RadioSide setLink={setLink}/>
            </header>
            <div>
                {peoples[1] ? <People People={peoples} setCurrentPeople={handleCurrentPeople}
                                      currentPeople={currentPeople}/> : null}
                {planets[1] ?
                    <Planets Planets={planets} setCurrentPlanet={handleCurrentPlanet}
                             currentPlanet={currentPlanet}/> : null}
                {starships[1] ?
                    <Starship Starships={starships} setCurrentStarship={handleCurrentStarship}
                              currentStarship={currentStarship}/> : null}

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