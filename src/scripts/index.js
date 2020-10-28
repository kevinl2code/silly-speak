import funTranslations from '../apis/funTranslations'

// Used in; SillyFacts.js, Translator.js 
export const handleTranslate = async (language, text, setter) => {
    const translation = await funTranslations.get(language, {
        params: {
            text: text
        }
    })
    setter(translation.data.contents.translated)
}


// Used in SillyFacts.js
export const renderCategories = (data) => { 
    return data.map((category) => {
        const capCategory = category.charAt(0).toUpperCase() + category.slice(1)
        return <option value={category} key={category} >{capCategory}</option> 
    })
}