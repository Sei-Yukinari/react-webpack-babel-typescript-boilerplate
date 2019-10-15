import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Head from '../components/Head';
import Page404 from '../components/Page404';

const routes = (
    <div>
        <Head/>
        <hr/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route component={Page404}/>
        </Switch>
    </div>
);
export default routes;
