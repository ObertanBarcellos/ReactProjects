import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Home";
import Cakes from "../Cakes";
import Candy from "../Candy";
import About from "../About";
import NotFound from "../NotFound";
import CakePage from "../CakePage";

export default () => {
    return (
        
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/cakes">
                <Cakes />
            </Route>

            <Route exact path="/cakes/page">
                <CakePage />
            </Route>

            <Route exact path="/candy">
                <Candy />
            </Route>

            <Route exact path="/about">
                <About />
            </Route>

            <Route>
                <NotFound />
            </Route>

        </Switch>
    );

}