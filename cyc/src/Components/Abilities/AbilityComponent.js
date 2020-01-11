import React, {Component} from 'react';
import {Ability} from "./Ability";
import {Intro} from "./Intro";
import './ability.scss';
import {AbilityIcon} from "./AbilityIcon";
import {Route, Switch} from "react-router-dom";

export class AbilityComponent extends Component {

    setAbout = () => {
        this.context.history.push('/abilities')
    };

    setCha = () => {
        this.context.history.push('/abilities/cha')
    };

    setStr = () => {
        this.context.history.push('/abilities/str')
    };

    setCon = () => {
        this.context.history.push('/abilities/con')
    };

    setDex = () => {
        this.context.history.push('/abilities/dex')
    };

    setInt = () => {
        this.context.history.push('/abilities/int')
    };

    setWis = () => {
        this.context.history.push('/abilities/wis')
    };

    render() {
        return (
            <div className={'page'}>
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

