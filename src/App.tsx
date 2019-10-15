import * as React from 'react';
import routes from './routes';
import { HashRouter as Router } from 'react-router-dom';

const app = () => {
    return (
        <Router>
            {routes}
        </Router>
    );
};

export default app;
