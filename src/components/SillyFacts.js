import React, { useEffect, useState, } from 'react'
import M from "materialize-css"

import chuckNorris from '../apis/chuckNorris'
import funTranslations from '../apis/funTranslations'

const SillyFacts = () => {
    
    const [ language, setLanguage ] = useState('')
    const [ category, setCategory ] = useState('random')
    const [ fact, setFact ] = useState('')
    const [ translatedFact, setTranslatedFact ] = useState('')

    useEffect(() => {
        M.AutoInit()
    }, [])


    const handleFetchFact = async () => {
        const newFact = await chuckNorris.get('random', {
            params: {
                category: category
            }
        })
        setFact(newFact.data.value)
    }

    const handleTranslate = async () => {
        const translation = await funTranslations.get(language, {
            params: {
                text: fact
            }
        })
        setTranslatedFact(translation.data.contents.translated)
    }

    const handleSubmit = async () => {
        await handleFetchFact()
        await handleTranslate()
    }


    console.log(fact)
    console.log(translatedFact)

    return (
        <div className="row">
            <div className="col s12">
                <h3 className="center-align">Silly Facts</h3>
            </div>
            <div className="col s6">
                <form className="col s12" onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit()
                }}>
                    <div className="input-field col s12">
                        <select onChange={(e) => setLanguage(e.target.value)} defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Make your choice</option>
                            <option value="pirate">Pirate</option>
                            <option value="ermahgerd">Ermahgerd</option>
                            <option value="redneck">Redneck</option>
                        </select>
                        <label>Languages/Dialects</label>
                    </div>
                    <div className="input-field col s12">
                        <select onChange={(e) => setCategory(e.target.value)} defaultValue={'random'}>
                            <option value="random">Random</option>
                            <option value="animal">Animal</option>
                            <option value="career">Career</option>
                            <option value="dev">Dev</option>
                            <option value="explicit">Explicit</option>
                            <option value="fashion">Fashion</option>
                            <option value="food">Food</option>
                            <option value="history">History</option>
                            <option value="money">Money</option>
                            <option value="movie">Movie</option>
                            <option value="music">Music</option>
                            <option value="political">Political</option>
                            <option value="religion">Religion</option>
                            <option value="science">Science</option>
                            <option value="sport">Sport</option>
                            <option value="travel">Travel</option>
                        </select>
                        <label>Category</label>
                    </div>
                    <div className="col s12">
                        <div className="center-align">
                            <button 
                                className="btn waves-effect waves-light" 
                                type="submit" 
                                name="action"
                            >Get Fact
                                <i className="material-icons right">mood</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="col s6">
                <div className="input-field col s12">
                    {/*When populating with translated text, add the class "active"*/}
                    <textarea  focus="true" id="textarea2" className="materialize-textarea active" style={{height: "200px"}} defaultValue={translatedFact} disabled={true}></textarea>
                    <label htmlFor="textarea2">Fact</label>
                </div>
            </div>
        </div>
    )
}

export default SillyFacts