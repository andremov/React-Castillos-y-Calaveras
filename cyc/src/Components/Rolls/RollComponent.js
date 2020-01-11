import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import {Intro} from "./Intro";
import {Roll} from "./Roll";

export class RollComponent extends Component {
    render() {
        return (
            <div className={'page'}>
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
