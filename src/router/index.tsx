import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../views/about";
import Application from "../views/app";
import Main from "../views/main";

const Routes = (props: any) => (
    <Router>
        <Switch>
            <Route path="/about" exact>
                <About />
            </Route>

            <Route path="/app" exact>
                <Application />
            </Route>

            <Route path="/">
                <Main />
            </Route>
        </Switch>
    </Router>
)


export default Routes;