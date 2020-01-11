import React, {Component, Fragment} from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import AbilityComponent from "./Abilities/AbilityComponent";
import {terms} from "../Terms";
import {titleCase} from "../Utilities";
import RollComponent from "./Rolls/RollComponent";
import {GMComponent} from "./GMComponent";


export class MainComponent extends Component {
    render() {
        return (
            <Fragment>
                <div className={'main-title serif bold'}>
                    {titleCase(terms.game)}
                </div>

                <Router>
                    <Switch>
                        <Route path="/abilities">
                            <AbilityComponent />
                        </Route>
                        <Route path="/rolls">
                            <RollComponent />
                        </Route>
                        <Route path="/gm">
                            <GMComponent />
                        </Route>
                    </Switch>
                </Router>

            </Fragment>
        );
    }
}