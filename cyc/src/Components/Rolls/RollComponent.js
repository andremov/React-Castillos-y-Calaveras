import React, {Component} from 'react';
import {titleCase} from "../../Utilities";
import {terms} from "../../Terms";
import {Link, Route, Switch, withRouter} from "react-router-dom";
import {Intro} from "./Intro";
import {Roll} from "./Roll";

class RollComponent extends Component {
    render() {
        return (
            <div className={'page'}>
                <Link to={'/rolls'} className={'page-title serif bold'}>
                    {titleCase(terms.rolls.plural)}
                </Link>

                <div className={'page-body'}>
                    <Switch>
                        <Route exact path="/rolls">
                            <Intro />
                        </Route>
                        <Route exact path="/rolls/saving">
                            <Roll info={'saving'} />
                        </Route>
                        <Route exact path="/rolls/check">
                            <Roll info={'check'} />
                        </Route>
                        <Route exact path="/rolls/attack">
                            <Roll info={'attack'} />
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default withRouter(RollComponent);