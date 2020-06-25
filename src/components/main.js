import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Portfolio from './portfolio';
import Contact from './contact';



const Main = () => (
    <Switch>
        <Route exact path="/landingpage" component ={LandingPage} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} />
    </Switch>
)

export default Main;