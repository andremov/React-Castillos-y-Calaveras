import React, {Component, Fragment} from 'react';
import {Ability} from "./Ability";
import {Intro} from "./Intro";
import './ability.scss';
import {terms} from '../../Terms';
import {AbilityIcon} from "./AbilityIcon";
import {titleCase} from "../../Utilities";

export class AbilityComponent extends Component {

    state = {
      ability : -1
    };

    setAbout = () => {
        this.setState({
            ability: -1
        })
    };

    setCha = () => {
        this.setState({
            ability: 5
        })
    };

    setStr = () => {
        this.setState({
            ability: 0
        })
    };

    setCon = () => {
        this.setState({
            ability: 2
        })
    };

    setDex = () => {
        this.setState({
            ability: 1
        })
    };

    setInt = () => {
        this.setState({
            ability: 3
        })
    };

    setWis = () => {
        this.setState({
            ability: 4
        })
    };

    render() {
        let {ability} = this.state;
        return (
            <div className={'page'}>
                <div className={'page-title serif bold'}>
                    {titleCase(terms.ability.plural)}
                </div>

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

                    { ability === -1? <Intro /> : <Ability info={ability} /> }

                </div>
            </div>
        );
    }

}
