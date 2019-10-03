import  React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LateralMenu from './components/lateralMenu/index';
import ViewServicos from './components/viewServicos/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ViewServicos} />
            <Route exact path="/menu" component={LateralMenu} />
        </Switch>
    </BrowserRouter>
)
export default Routes;