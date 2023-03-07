import React from "react";
import {useNavigate} from "react-router-dom";


import "./ErrorPage.css"

const ErrrorPage =()=>{
    const navigate = useNavigate()
    const goBack = () =>{
        navigate(-1)
    }
    const goHome = () =>{
        navigate("/")
    }
    return(
        <div className="error__message">
            <h1>Sorry , Page not found</h1>
            <div className="btn__side">
                <button onClick={()=>goHome()} className="error__btn">Go Home</button>
                <button onClick={()=>goBack()} className="error__btn">Go back</button>
            </div>

        </div>
    )
}

export default ErrrorPage