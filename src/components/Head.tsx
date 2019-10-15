import * as React from 'react';
import { Link } from 'react-router-dom';

const component: React.FC = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
    );
};

export default component;
