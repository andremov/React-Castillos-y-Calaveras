import React, {Component, Fragment} from 'react';
import {abilityChecks, attackRolls, contests, groupChecks, passive, savingThrows} from "../../Parts";
import {titleCase} from "../../Utilities";
import {terms} from "../../Data/Terms";
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
                <ArrowBtn url={'/rolls'} back={true} text={titleCase(terms.rolls.plural)}/>
            </Fragment>
        );
    }

    checkRender() {
        return(
            <Fragment>
                {abilityChecks(false)}
                <ArrowBtn url={'/abilities'} back={false} text={titleCase(terms.ability.plural)}/>
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
                <ArrowBtn url={'/combat'} back={false} text={titleCase(terms.combat.name)}/>
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
