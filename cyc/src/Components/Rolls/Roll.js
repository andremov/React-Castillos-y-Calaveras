import React, {Component, Fragment} from 'react';
import {abilityChecks, attackRolls, contests, groupChecks, passive, savingThrows} from "../../Parts";

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
