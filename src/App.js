import React, {createContext, useState} from 'react'
import ErrorBoundary from "./component/errorBoundary/ErrorBoundary";
import Header from "./component/Header/Header";

import './App.css';
import {BrowserRouter} from 'react-router-dom';


export const ThemeContext = createContext(null)
export const LangContext = createContext(null)
export const AuthContext = createContext(null)

function App() {

    const [currentTheme, setCurrentTheme] = useState(false)
    const [currentLang, setCurrentLang] = useState("eng")
    const [auth, setAuth] = useState(false)

    return (
        <div className="App">
            <LangContext.Provider value={{currentLang, setCurrentLang}}>
                <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
                    <AuthContext.Provider value={{auth, setAuth}}>
                        <BrowserRouter>
                            <Header/>
                            <ErrorBoundary/>
                        </BrowserRouter>
                    </AuthContext.Provider>
                </ThemeContext.Provider>
            </LangContext.Provider>
        </div>
    );
}

export default App;
