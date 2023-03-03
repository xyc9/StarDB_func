import {createContext, useState} from 'react'
import ErrorBoundary from "./component/errorBoundary/ErrorBoundary";

import './App.css';

export const ThemeContext = createContext(null)
export const LangContext = createContext(null)

function App() {

    const [currentTheme, setCurrentTheme] = useState(false)
    const [currentLang, setCurrentLang] = useState("eng")
    return (
        <div className="App">
            <LangContext.Provider value={{currentLang, setCurrentLang}}>
                <ThemeContext.Provider value={{currentTheme, setCurrentTheme}}>
                    <ErrorBoundary/>
                </ThemeContext.Provider>
            </LangContext.Provider>
        </div>
    );
}

export default App;
