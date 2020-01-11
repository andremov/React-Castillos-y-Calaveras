import React, {Component, Fragment} from 'react';
import {abilities} from './AbilityInfo';
import {terms} from '../../Terms';
import {titleCase} from '../../Utilities';

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
            <div className={'ability'}>

                <div className={'header'}>
                    <div className={'name serif bold'}>
                        {data.name}
                    </div>


                    <div className={'code sans'}>
                        {data.code}
                    </div>
                </div>

                <div className={'description sans'}>
                    {data.description_long}
                </div>

                <div className={'skills'}>

                    <div className={'title serif'}>
                        {titleCase(terms.skill.plural)}
                    </div>

                    <ul className={'list'}>
                        {
                        data.skills.map(item =>
                            <li key={data.skills.indexOf(item)} className={'item sans'}>
                                {item}
                            </li>
                        )
                        }
                    </ul>
                </div>

                <div className={'checks'}>
                    <div className={'title serif'}>
                        {titleCase(
                            (id === 0 ?
                            terms.rolls.ability.str.plural :
                                id === 1 ?
                                terms.rolls.ability.dex.plural :
                                    id === 2 ?
                                    terms.rolls.ability.con.plural :
                                        id === 3 ?
                                        terms.rolls.ability.int.plural :
                                            id === 4?
                                            terms.rolls.ability.wis.plural :
                                            terms.rolls.ability.cha.plural
                            )
                        )}
                    </div>

                    <div className={'description sans'}>
                        {data.description_checks}
                    </div>

                    <ul className={'list'}>
                        {
                        data.checks.map(item => { return(
                            <li key={data.checks.indexOf(item)} className={'item sans'}>
                                 {item}
                            </li>
                        )})
                        }
                    </ul>
                </div>
            </div>

        );
    }

}
