import React, {Component} from 'react';
import {titleCase} from "../../Utilities";
import {terms} from "../../Terms";
import {contest, diceRolls, group, passive} from "../../Parts";
import {Link} from "react-router-dom";



export class RollComponent extends Component {
    render() {
        return (
            <div className={'page'}>
                <div className={'page-title serif bold'}>
                    {titleCase(terms.rolls.plural)}
                </div>

                <div className={'page-body'}>

                    {diceRolls(false)}

                    <Link to={'/rolls/check'} className={'serif'}>
                        {terms.rolls.ability.long.singular}
                    </Link>

                    <Link to={'/rolls/saving'} className={'serif'}>
                        {terms.rolls.saving.singular}
                    </Link>

                    <Link to={'/rolls/attack'} className={'serif'}>
                        {terms.rolls.attack.singular}
                    </Link>

                </div>
            </div>
        );
    }
}
