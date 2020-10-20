// Imports
import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomePage from '../components/HomePage';
import QuizWrapper from '../containers/QuizWrapper';
import SearchWrapper from '../containers/SearchWrapper';
import NavBar from '../components/NavBar';
import ResultWrapper from '../containers/ResultWrapper';

// Build Router
export default function MainRouter() {

    // Render
    return(
        <Router>

            <Fragment>

                <NavBar />

                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>

                <Switch>
                    <Route exact path="/quiz" component={QuizWrapper} />
                </Switch>

                <Switch>
                    <Route exact path="/all" component={SearchWrapper} />
                </Switch>

                {/* <Switch>
                    <Route exact path="/result" component={ResultWrapper} />
                </Switch> */}

            </Fragment>

        </Router>
    );

}