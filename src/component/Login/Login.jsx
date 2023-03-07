import React, {useContext} from "react";
import {AuthContext, LangContext} from "../../App";

import "./Login.css"

const Login = ()=>{
    const {auth , setAuth} = useContext(AuthContext)
    const {currentLang} = useContext(LangContext)
    return(
        <div className="auth__side">
        <button className={auth ? "active" : ""} onClick={()=>setAuth(true)}>{currentLang === "od" ? "Войти" : "Log in"}</button>
        <button className={auth ? "" : "active"} onClick={()=>setAuth(false)}>{currentLang === "od" ? "Выйти" : "Log out"}</button>
        </div>
    )
}
export default Login