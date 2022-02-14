
import Header from "./components/header/header.js";
import Calculator from "./components/calculator/calculator.js";
import React, { useState } from "react";
import "./App.scss";

const App = () => {
    const [theme, setTheme] = useState('themeA');

    const onThemeUpdate = (themeValue) => {
        switch (parseInt(themeValue)) {
            case 1:
                setTheme('themeA');
                break;
            case 2:
                setTheme('themeB');
                console.log('after update', theme)
                break;
            case 3:
                setTheme('themeC');
                break;
        }
    }

    return <div className={`app ${theme == "themeA" ? "themeA" : theme == "themeB" ? "themeB" : "themeC"}`}>
        <Header onThemeUpdate={onThemeUpdate} />
        <main>
            <Calculator />
        </main>
    </div>

}
export default App;