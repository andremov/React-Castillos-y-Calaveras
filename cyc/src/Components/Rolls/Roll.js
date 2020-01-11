import React, {Component, Fragment} from 'react';
import {terms} from "../../Terms";
import AbilityComponent from "../Abilities/AbilityComponent";
import RollComponent from "./RollComponent";
import {Route, Switch} from "react-router-dom";
import {abilityChecks, attackRolls, contests, groupChecks, passive, savingThrows} from "../../Parts";
import {ArrowBtn} from "../ArrowBtn";

export class Roll extends Component {

    state = {
        rollType : ""
    };

    componentDidUpdate() {
        this.updateState();
    }

    componentDidMount() {
        this.updateState();
    }

    updateState() {
        if (this.props.info !== this.state.rollType){
            this.setState({
                rollType : this.props.info
            })
        }
    }

    render() {
        let {rollType} = this.state;

        return (
            <Fragment>
                {
                    rollType === 'check'?
                        this.checkRender() :
                        rollType === 'saving'?
                            this.savingRender() :
                            this.attackRender()
                }
            </Fragment>
        );
    }

    checkRender() {
        return(
            <Fragment>
                {abilityChecks(false)}
                {contests()}
                {groupChecks()}
                {passive()}
            </Fragment>
        )
    }

    attackRender() {
        return(
            <Fragment>
                {attackRolls(false)}
            </Fragment>
        )
    }

    savingRender() {
        return(
            <Fragment>
                {savingThrows(false)}
            </Fragment>
        )
    }
}
