import { createContext, useState, useEffect } from 'react'

export const themes = {
  light: {

    containers: '#91C4CB',
    nav: '#34829B',
    h1: '#000000',
    foreground: '#242526',
    background: '#fff',
    btn: '#000000',
    btnp: '#fff',
  },
  dark: {

    containers: '#6C6C6C',
    nav: '#081014',
    h1: '#fff',
    foreground: '#fff',
    background: '#242526',
    btn: '#fff',
    btnp: '#000000',
  },
};

// Let our context know what properties to expect
export const ThemeContext = createContext({
  theme: {},
  toggleTheme: () => {},
});

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.dark);

    const toggleTheme = () => {
      setTheme((previousValue) =>
        previousValue === themes.light ? themes.dark : themes.light
      );
    };

    useEffect(() => {
      document.body.style.background = theme.background;
    }, [theme]);

  return (
    <ThemeContext.Provider value={{theme: theme, toggleTheme  }}>
        {props.children}      
    </ThemeContext.Provider>
  );
};
