import React from 'react'
import Home from './pages/home';
import { Switch,Route } from 'react-router-dom';
import About from './pages/about';

function App(){
    return(
        <React.Fragment>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/about' exact component={About} />
            </Switch>
        </React.Fragment>
    );
}

export default App