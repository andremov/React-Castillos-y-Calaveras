import React, {Component, Fragment} from 'react';
import {Ability} from "./Ability";
import {Intro} from "./Intro";
import './ability.scss';
import {terms} from '../../Terms';
import {AbilityIcon} from "./AbilityIcon";
import {titleCase} from "../../Utilities";
import {withRouter, Route, Switch, Link} from "react-router-dom";

class AbilityComponent extends Component {

    setAbout = () => {
        this.props.history.push('/abilities')
    };

    setCha = () => {
        this.props.history.push('/abilities/cha')
    };

    setStr = () => {
        this.props.history.push('/abilities/str')
    };

    setCon = () => {
        this.props.history.push('/abilities/con')
    };

    setDex = () => {
        this.props.history.push('/abilities/dex')
    };

    setInt = () => {
        this.props.history.push('/abilities/int')
    };

    setWis = () => {
        this.props.history.push('/abilities/wis')
    };

    render() {
        return (
            <div className={'page'}>
                <Link to={'/abilities'} className={'page-title serif bold'}>
                    {titleCase(terms.ability.plural)}
                </Link>

                <div className={'ability-menu'}>
                    <AbilityIcon ability={0} tooltip={"Información"} onClick={this.setAbout}/>
                    <AbilityIcon ability={1} tooltip={"Fuerza"} onClick={this.setStr}/>
                    <AbilityIcon ability={2} tooltip={"Destreza"} onClick={this.setDex}/>
                    <AbilityIcon ability={3} tooltip={"Complexión"} onClick={this.setCon}/>
                    <AbilityIcon ability={4} tooltip={"Inteligencia"} onClick={this.setInt}/>
                    <AbilityIcon ability={5} tooltip={"Sabiduría"} onClick={this.setWis}/>
                    <AbilityIcon ability={6} tooltip={"Carisma"} onClick={this.setCha}/>
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

}

export default withRouter(AbilityComponent);