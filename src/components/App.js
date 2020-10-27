import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Landing from './Landing'
import Translator from './Translator'
import SillyFacts from './SillyFacts'

const App = () => {
    return(
        <div className="container">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/translate" component={Translator} />
                    <Route path="/facts" component={SillyFacts} />
                </Switch>
            </BrowserRouter>   
        </div>
    )
}

export default App