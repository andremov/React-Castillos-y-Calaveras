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

                <div className={'description'}>

                    <div className={'header3 serif bold'}>
                        Will Saving Throw
                    </div>
                    Saving Throw relacionado con la fortaleza mental del personaje. Se utiliza el modifier de Saviduría.

                    <div className={'header3 serif bold'}>
                        Reflex Saving Throw
                    </div>
                    Saving Throw relacionado con los reflejos del personaje. Se utiliza el modifier de Destreza.

                    <div className={'header3 serif bold'}>
                        Fortitude Saving Throw
                    </div>
                    Saving Throw relacionado con la fortaleza del personaje. Se utiliza el modifier de Complexión.
                </div>
            </Fragment>
        )
    }
}
