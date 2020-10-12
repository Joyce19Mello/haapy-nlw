import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes(){
    return (
        // Switch - so uma rota chamada ao mesmo tempo 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/orfanato" component={OrphanagesMap}/>
            </Switch>
        </BrowserRouter>
    );
}
export default Routes;