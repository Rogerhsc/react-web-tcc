import  React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LateralMenu from './components/lateralMenu/index';
import ViewServicos from './components/viewServicos/index';
import ViewAnuncios from './components/viewAnuncios/index'
import PerfilAnuncio from './components/perfilAnuncio/index';
import Analitics from './components/viewAnalitics/index';
import Chat from './components/chat/index';
import WorkComent from './components/lastWork/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/:userId" component={ViewServicos} />
            <Route exact path="/:userId/menu" component={LateralMenu} />
            <Route exact path="/:userId/servicos/:categoria" component={ViewAnuncios}></Route>
            <Route exact path="/:userId/servicos/:categoria/:perfil" component={PerfilAnuncio}></Route>
            <Route exact path="/:userId/servicos/:categoria/:perfil/:work" component={WorkComent}></Route>
            <Route exact path="/:userId/analitcs/" component={Analitics}></Route>
            <Route exact path="/:userId/servicos/:categoria/:perfil/:anuncioId" component={Chat}></Route>
        </Switch>
    </BrowserRouter>
)
export default Routes;