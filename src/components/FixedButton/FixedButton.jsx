import React, { useContext } from 'react'
import "./FixedButton.scss"
import LanguageContext from '../../context/LanguageContext'

export function FixedButton() {
const {setLanguageToEnglish, setLanguageToSpanish, language} = useContext(LanguageContext);
  return (
    <div >
      <button onClick={language && language == "ES" ? setLanguageToEnglish : language == "EN" ? setLanguageToSpanish : console.log("Hola")} className='fixed-button'>{language && language == "ES" ? "EN" : language == "EN" ? "ES" : "Hi"}</button>
    </div>
  )
}
