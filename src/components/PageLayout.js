import React from 'react'
import Navbar from '../components/Navbar'
import "../style.css"
import useTheme from '../useTheme'

function PageLayout({ children }) {
    const { theme, toggleTheme } = useTheme();

    function getTheme() {
        if (theme === "light") {
            typeof window !== "undefined" && document.documentElement.style
                .setProperty('--bg-color', '#FFF');
            return <img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/moon-symbol.png" alt="moon-icon" />
        }
        else {
            typeof window !== "undefined" && document.documentElement.style
                .setProperty('--bg-color', '#12181B');
            return <img src="https://img.icons8.com/android/24/FFFFFF/sun.png" alt="sun-icon" />
        }
    }

    return (
        <div className={theme}>
            <Navbar />
            <button className="btn theme-toggle-button" onClick={toggleTheme}>
                {getTheme()}
            </button>
            <main >{children}</main>
            <footer className={"text-center pt-4 " + theme}>
                <h6> Author: <a className="font-weight-bold text-info" href="https://twitter.com/mtsuchi_tech" >mtsuchi_tech</a></h6>
                <h6>Copyright © Naked Wetwear Side:Misc. 2021</h6>
                <h6>Powered by <a className="font-weight-bold text-info" href="https://www.gatsbyjs.com/starters/algokun/the404blog">the404blog</a></h6><br />
            </footer>
        </div>
    )
}

export default PageLayout
