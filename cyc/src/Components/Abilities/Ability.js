import React, {Component, Fragment} from 'react';
import {abilities} from '../../Data/Abilities';
import {terms} from '../../Data/Terms';
import {titleCase} from '../../Utilities';
import {ArrowBtn} from "../ArrowBtn";

export class Ability extends Component {

    state = {
        abilityID : -1,
        abilityInfo : {}
    };

    componentDidMount() {
        this.setAbility(this.props.info);
    }

    componentDidUpdate() {
        this.setAbility(this.props.info);
    }

    setAbility( id ) {
        if (id !== this.state.abilityID) {
            this.setState({
                abilityID : id,
                abilityInfo : abilities[id]
            })
        }
    }

    render() {
        let {abilityID, abilityInfo} = this.state;

        if (abilityID === -1) {
            return <div className={'section'}> No ability. </div>;
        } else {
            return this.correctHTML(abilityInfo, abilityID);
        }
    }

    correctHTML(data, id) {

        return(
            <Fragment>

                <div className={'ability-header'}>
                    <div className={'header1 name serif bold'}>
                        {data.name}
                    </div>

                    <div className={'code'}>
                        {data.code}
                    </div>
                </div>

                <div className={'description'}>
                    {data.description_long}
                </div>

                <div className={'header2 bold serif'}>
                    {titleCase(terms.skill.plural)}
                </div>

                <ul>
                    {
                    data.skills.map(item =>
                        <li key={data.skills.indexOf(item)} className={'item sans'}>
                            {item}
                        </li>
                    )
                    }
                </ul>

                <div className={'header2 bold serif'}>
                    {titleCase(
                        terms.rolls.ability.short.plural
                        +" de "+
                        data.name
                    )}
                </div>

                <div className={'description'}>
                    {data.description_checks}

                    <ul>
                        {
                        data.checks.map(item => { return(
                            <li key={data.checks.indexOf(item)} className={'item sans'}>
                                 {item}
                            </li>
                        )})
                        }
                    </ul>
                </div>

                <ArrowBtn url={'/rolls/check'} back={false} text={titleCase(terms.rolls.ability.long.plural)}/>
            </Fragment>

        );
    }

}
