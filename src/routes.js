import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from './Routes/Home/Home';
import Mens_Roster from './Routes/Mens_Roster/Mens_Roster';
import Womens_Roster from './Routes/Womens_Roster/Womens_Roster';
import Allstars_Roster from './Routes/Allstars_Roster/Allstars_Roster';

export default (

    <Switch>
        <Route exact path= '/' component= {Home} />
        <Route path= '/allstars' component= {Allstars_Roster}/>
        <Route path= '/womens' component= {Womens_Roster}/>
        <Route path= '/mens' component= {Mens_Roster}/>
    </Switch>
)