import React,{ReactNode,useState}from "react"


const themes = {
    light: {
      themeName:'light',
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      themeName:'dark',
      foreground: "#ffffff",
      background: "#222222"
    }
  };

export const ThemeContext = React.createContext({
  theme:themes.light,
  toggleTheme:()=>{}
});
ThemeContext.displayName = 'ThemeContext';
export function AppProvider({children}:{children:ReactNode}) {
  
  const [theme, setTheme]=useState(themes.light)
  let toggleTheme = ()=>{
    console.log('toggleTheme');
    
    theme.themeName === 'light' ? setTheme(themes.dark) : setTheme(themes.light) 
  }
    return (
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
      </ThemeContext.Provider>
    );
  }
