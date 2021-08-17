import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from 'components/pages/NotFound';
import Login from 'pages/login/Login';
import HomeIndex from 'pages/index';
let basename = '';
if (process.env.NODE_ENV === 'development') {
    basename = '/'
} else {
    basename = '/admin'
}

function App() {
    return (
        <Router basename={basename}>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home" push />} />
                <Route path="/home" component={HomeIndex} />
                <Route path="/404" component={NotFound} />
                <Route path="/login" component={Login} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
