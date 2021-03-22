import React from "react";
import './app.module.css';
import Login from "./components/login/login";
import styles from './app.module.css';
import Maker from "./components/maker/Maker";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App({authService}) {

    return (
        <div className={styles.app}>
            <Router>
                <Switch>
                    <Route exact path={['/', '/home']}>
                        <Login authService={authService}/>
                    </Route>
                    <Route path="/maker">
                        <Maker authService={authService}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
