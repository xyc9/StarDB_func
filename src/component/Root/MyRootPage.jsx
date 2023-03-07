import React, {useContext, useEffect, useState} from "react";
import RadioSide from "../assets/radioSide";
import People from "../people/People";
import Planets from "../planets/Planets";
import Starship from "../starships/Starship";
import {ClipLoader} from "react-spinners";
import {AuthContext, ThemeContext} from "../../App";
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
import ErrrorPage from "../errorRedirect/ErrrorPage";


const MyRootPage = () => {
    const [apiData, setApiData] = useState([]);
    const [link, setLink] = useState("people");
    const [isLoading, setIsLoading] = useState(false);
    const [currentItem, setCurrentItem] = useState("");
    const {currentTheme} = useContext(ThemeContext)


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
    const {auth} = useContext(AuthContext)
    return (
        <div className={currentTheme ? "darkBody" : "lightBody"}>
            <div className="radio__side">
                <h1>StarDB : </h1>
                <RadioSide setLink={setLink}/>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/people" element={auth ? <People People={apiData} setCurrentPeople={handleCurrentItem}
                                                       currentPeople={currentItem} />: <Home/>}/>
                <Route path="/planets" element={auth ? <Planets Planets={apiData} setCurrentPlanet={handleCurrentItem}
                                                         currentPlanet={currentItem}/> : <Home/>}/>
                <Route path="/starships" element={auth ? <Starship Starships={apiData} setCurrentStarship={handleCurrentItem}
                                                            currentStarship={currentItem}/> : <Home/>}/>
                <Route path="*" element={<ErrrorPage/>}/>
            </Routes>
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

export default MyRootPage;