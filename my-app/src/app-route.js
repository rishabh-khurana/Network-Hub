import React from 'react';
import ClippedDrawer from './home';
import LoginPage from './login';
import SignUpPage from './signup';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={LoginPage}/>
                    <Route exact path='/login' component={LoginPage}/>
                    <Route exact path='/signup' component={SignUpPage}/>
                    <Route path='/home' component={ClippedDrawer}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default LandingPage;
