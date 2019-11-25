import React from 'react';
import LoginForm from './home/login';
import HomePage from './home/home';
import { BrowserRouter, Route } from 'react-router-dom';

const BaseRouter = ()=>(
    <div>
        <BrowserRouter>
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/' component={HomePage} />
        </BrowserRouter>    
    </div>
);

export default BaseRouter