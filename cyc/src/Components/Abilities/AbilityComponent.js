import React, {Component, Fragment} from 'react';
import {Ability} from "./Ability";
import {Intro} from "./Intro";
import './ability.scss';
import {NavLink, Route, Switch} from "react-router-dom";
import about from '../../assets/about.svg';
import {abilities} from "../../Abilities";

export class AbilityComponent extends Component {

    render() {
        return (
            <div className={'page'}>
                <div className={'ability-menu'}>

                    {this.abilityIcon(about, "Información", '/abilities')}
                    {abilities.map(item =>
                        <Fragment key={abilities.indexOf(item)}>
                            {this.abilityIcon(item.icon, item.name, item.url)}
                        </Fragment>
                    )}

                </div>

                <div className={'page-body'}>
                    <Switch>
                        <Route exact path="/abilities">
                            <Intro />
                        </Route>
                        <Route exact path="/abilities/str">
                            <Ability info={0}/>
                        </Route>
                        <Route exact path="/abilities/dex">
                            <Ability info={1}/>
                        </Route>
                        <Route exact path="/abilities/con">
                            <Ability info={2}/>
                        </Route>
                        <Route exact path="/abilities/int">
                            <Ability info={3}/>
                        </Route>
                        <Route exact path="/abilities/wis">
                            <Ability info={4}/>
                        </Route>
                        <Route exact path="/abilities/cha">
                            <Ability info={5}/>
                        </Route>
                    </Switch>

                </div>
            </div>
        );
    }

    abilityIcon(icon, tooltip, url) {
        return (
            <NavLink exact to={url} className={'ability-icon'}>
                <span className="tooltip">{tooltip}</span>
                <img alt={""} src={icon} />
            </NavLink>
        );
    }

}

