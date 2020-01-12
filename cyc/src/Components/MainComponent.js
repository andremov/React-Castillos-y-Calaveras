import React, {Component, Fragment} from 'react';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import '../Style/trinkets.scss';
import {terms} from "../Data/Terms";
import {titleCase} from "../Utilities";
import {MainMenu} from "./MainMenu";
import {tree} from "../Tree";


class MainComponent extends Component {
    render() {
        return (
            <Fragment>
                <div className={'main-title serif bold'}>
                    {titleCase(terms.game)}
                </div>

                <MainMenu />

                <Router>
                    <Switch>
                        {
                            tree.map(item =>

                                <Route key={'Main-'+tree.indexOf(item)} path={item.path}>
                                    {item.comp}
                                </Route>
                            )
                        }
                    </Switch>
                </Router>

            </Fragment>
        );
    }
}

export default (MainComponent);