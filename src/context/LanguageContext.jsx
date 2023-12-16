import { createContext, useState } from "react";

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState("ES");
    const setLanguageToEnglish = () => {
        setLanguage("EN");
    }
    const setLanguageToSpanish = () => {
        setLanguage("ES");
    }

    const contextValue = {
        setLanguageToEnglish, setLanguageToSpanish, language
    }
return(
<LanguageContext.Provider value={contextValue}>
{children}
</LanguageContext.Provider>    
)
}
export {LanguageProvider};
export default LanguageContext;