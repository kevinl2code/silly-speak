import React, { useState, useEffect } from 'react'
import M from "materialize-css"

import { handleTranslate } from '../scripts'

const Translator = () => {

    const [ language, setLanguage ] = useState('')
    const [ englishText, setEnglishText ] = useState('')
    const [ translatedText, setTranslatedText ] = useState('')

    useEffect(() => {
        M.AutoInit()
    }, [])

    useEffect(() => {
        M.updateTextFields()
    }, [englishText, translatedText])

    // Need to add validation to the form
    return(
        <div className="row">
            <div className="col s12">
                <h3 className="center-align">Silly Translator</h3>
            </div>
            <form className="col s12" onSubmit={(e) => {
                e.preventDefault()
                handleTranslate(language, englishText, setTranslatedText)
                console.log(e)}}>
                <div className="input-field col s12">
                    <select onChange={(e) => setLanguage(e.target.value)} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Select</option>
                        <option value="pirate">Pirate</option>
                        <option value="yoda">Yoda</option>
                        <option value="redneck">Redneck</option>
                    </select>
                    <label>Languages/Dialects</label>
                </div>
                <div className="col s6">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea" style={{height: "200px"}} value={englishText} onChange={(e) => setEnglishText(e.target.value)}></textarea>
                            <label htmlFor="textarea1">Input</label>
                        </div>
                    </div>
                </div>
                <div className="col s6">
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea  focus="true" id="textarea2" className="materialize-textarea active" style={{height: "200px"}} defaultValue={translatedText} disabled={true}></textarea>
                            <label htmlFor="textarea2">Output</label>
                        </div>
                    </div>
                </div>
                <div className="col s12">
                    <div className="center-align">
                        <button 
                            className="btn waves-effect waves-light" 
                            type="submit" 
                            name="action"
                        >Translate
                            <i className="material-icons right">translate</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Translator