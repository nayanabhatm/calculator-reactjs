import React from "react"
import ThemeSwitcher from "../theme_switcher/theme_switcher";
import "./header.scss";

const Header = (props) => {
    const onThemeUpdate = (value) => {
        props.onThemeUpdate(value);
    }

    return <React.Fragment>
        <header className="calc-title">
            <h3>Calculator</h3>
            <ThemeSwitcher onThemeUpdate={onThemeUpdate} />
        </header>
    </React.Fragment>
}

export default Header;