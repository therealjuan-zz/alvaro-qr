import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Passcode from './passcode';
import Twofactor from './twofactor';
import Terminal from './terminal';
import ProtectedRoute from './protected.route';
import './styles.css';
import auth from './auth';
import OTP from './otp';

class App extends Component {

    public render() {
        return (
            <Router>
                <div className="App">
                    { (!auth.isAuthenticated()) ? (
                        <Route exact path="/" component={Passcode} />
                    ) : ( !OTP.isAuthenticated() ?
                            <Route exact path="/two-factor" component={Twofactor} />
                        : <Route exact path="/terminal" component={Terminal} />
                    )
                    }
                </div>
            </Router>
        )
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('root'),
);