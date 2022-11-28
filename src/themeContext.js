import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getInitialTheme = () => {
    console.log("window", window);
    if(window.localStorage){
        const storedPef = window.localStorage.getItem("current-theme");
        if(typeof storedPef === "string"){
            return storedPef;
        }

        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
    }

    return "light";

}

export const ThemeProvider = ({ initialTheme, children }) => {

    const [theme, setTheme] = useState(getInitialTheme);

    console.log("theme", theme);
    console.log("initialTheme", initialTheme);

    useEffect(() => {
        checkTheme(initialTheme);
    }, [theme]);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === "dark";

        root.classList.remove(isDark ? "light" : "dark");
        root.classList.add(existing);

        localStorage.setItem("current-theme", existing)

        if(initialTheme){
            checkTheme(initialTheme);
        }
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    );

}

export default ThemeProvider;