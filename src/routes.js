import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shoppingcartover10 from './pages/Shoppingcartover10';
import Shoppingcartunder10 from './pages/Shoppingcartunder10';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/shoppingcartover10" component={Shoppingcartover10}/>
                <Route path="/shoppingcartunder10" component={Shoppingcartunder10}/>
            </Switch>
        </BrowserRouter>
    );    
}
