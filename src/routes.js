import  React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import LoginScreen from './components/loginScreen'
import LateralMenu from './components/lateralMenu/index';
import ViewServicos from './components/viewServicos/index';
import ViewAnuncios from './components/viewAnuncios/index'
import PerfilAnuncio from './components/perfilAnuncio/index';
import Analitics from './components/viewAnalitics/index';
import Chat from './components/chat/index';
import WorkComent from './components/lastWork/index';
import ViewCadAnuncio from './components/viewCadAnuncio/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginScreen}/>
            <Route exact path="/:userId" component={ViewServicos} />
            <Route exact path="/:userId/anuncio" component={ViewCadAnuncio} />
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