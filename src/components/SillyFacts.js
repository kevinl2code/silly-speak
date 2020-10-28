import React, { useEffect, useState, useRef } from 'react'
import M from "materialize-css"

import chuckNorris from '../apis/chuckNorris'
import { handleTranslate, renderCategories } from '../scripts'

const SillyFacts = () => {
    
    const [ language, setLanguage ] = useState('')
    const [ categories, setCategories ] = useState([])
    const [ category, setCategory ] = useState('')
    const [ loading, setLoading ] =useState(true)
    const [ fact, setFact ] = useState('')
    const [ translatedFact, setTranslatedFact ] = useState('')
    
    const isInitialMount = useRef(true);

    useEffect(() => {
        M.AutoInit()
        const fetchCategories = async () => {
            const fetchedCategories = await chuckNorris.get('categories')
            setCategories(fetchedCategories.data)
            setLoading(false)
        }
        fetchCategories()

    }, [loading])

    useEffect(() => {
        M.updateTextFields()
    }, [translatedFact])

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else if (fact.length > 1) {
           handleTranslate(language, fact, setTranslatedFact)
         }
    }, [fact, language])


    const handleFetchFact = async () => {
        const data = await chuckNorris.get('random', {
            params: {
                category: category
            }
        })
        setFact(data.data.value)
    }

    return (
        <div className="row">
            <div className="col s12">
                <h3 className="center-align">Silly Facts</h3>
            </div>
            <div className="col s6">
                <form className="col s12" onSubmit={(e) => {
                    e.preventDefault()
                    handleFetchFact()
                }}>
                    <div className="input-field col s12">
                        <select onChange={(e) => setLanguage(e.target.value)} defaultValue={'DEFAULT'}>
                            <option value="DEFAULT" disabled>Select</option>
                            <option value="pirate">Pirate</option>
                            <option value="yoda">Yoda</option>
                            <option value="redneck">Redneck</option>
                        </select>
                        <label>Languages/Dialects</label>
                    </div>
                    <div className="input-field col s12">
                        <select
                            onChange={(e) => setCategory(e.target.value)}
                            defaultValue={''}
                            disabled={loading}
                        >
                            {renderCategories(categories)}
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
                    <textarea  
                        focus="true" 
                        id="textarea2" 
                        className="materialize-textarea active" 
                        style={{height: "300px"}} 
                        defaultValue={translatedFact} 
                        disabled={true}
                    ></textarea>
                    <label htmlFor="textarea2">Fact</label>
                </div>
            </div>
        </div>
    )
}

export default SillyFacts