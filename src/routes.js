import  React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LateralMenu from './components/lateralMenu/index';
import ViewServicos from './components/viewServicos/index';
import ViewAnuncios from './components/viewAnuncios/index'
import PerfilAnuncio from './components/perfilAnuncio/index';
import Analitics from './components/viewAnalitics/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ViewServicos} />
            <Route exact path="/menu" component={LateralMenu} />
            <Route exact path="/servicos/:categoria" component={ViewAnuncios}></Route>
            <Route exact path="/servicos/:categoria/:perfil" component={PerfilAnuncio}></Route>
            <Route exact path="/analitcs/:userId" component={Analitics}></Route>
        </Switch>
    </BrowserRouter>
)
export default Routes;