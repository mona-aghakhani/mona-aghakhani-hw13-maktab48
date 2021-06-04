import * as React from "react";

export const themes = {
    light: {
        foreground: 'rgb(43, 99, 11)',
        background: 'rgb(249, 252, 244)',
        // background2: 'rgba(249, 252, 244,0.98)',
    },
    dark: {
        // foreground: '#6a6a6a',
        foreground: 'wheat',
        background: '#191e46',
        background2: 'rgba(21, 25, 58,0.8)',
    },
};

export const ThemeContext = React.createContext();