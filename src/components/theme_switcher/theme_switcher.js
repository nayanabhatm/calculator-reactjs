import React from "react";
import "./theme_switcher.scss";

const ThemeSwitcher = (props) => {
    const onThemeUpdate = (e) =>{
        console.log(e.target.value,"fasdfasfasdf",props);
        props.onThemeUpdate(e.target.value);
    }

    return <React.Fragment>
        <div className="themes">
            <div className="theme">
                <label htmlFor="theme1">1</label>
                <input type="radio" name="theme" value="1" id="theme1" defaultChecked onChange={onThemeUpdate}></input>
            </div>
            <div className="theme">
                <label htmlFor="theme2">2</label>
                <input type="radio" name="theme" value="2" id="theme2" onChange={onThemeUpdate}></input>
            </div>
            <div className="theme">
                <label htmlFor="theme3">3</label>
                <input type="radio" name="theme" value="3" id="theme3" onChange={onThemeUpdate}></input>
            </div>
        </div>
    </React.Fragment>
}

export default ThemeSwitcher;