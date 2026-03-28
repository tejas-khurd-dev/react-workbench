import { createContext, useState  } from "react";

export const postDataContext = createContext();

export const helloContext = createContext()

const ThemeContext = ({children}) => {

  const [theme, settheme] = useState("light")

  return (
    <helloContext.Provider value={123}>
      {/* 
        
        React can render only:

        ✅ string → "hello"
        ✅ number → 123
        ✅ boolean → (ignored)
        ✅ JSX → <div />
        ❌ object → {} (NOT directly)
        
        */}
      <postDataContext.Provider value={{theme,settheme}}>
        {/* Note: you can also provide array or object in value in '{}' curly brackets */}
        {children}
      </postDataContext.Provider>
      
    </helloContext.Provider>
  );
};

export default ThemeContext;