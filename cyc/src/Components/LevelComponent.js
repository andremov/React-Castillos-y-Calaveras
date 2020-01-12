import React, {Component} from 'react';
import {abilityIntro, hitDice, level} from "../Parts";
import {titleCase} from "../Utilities";
import {terms} from "../Data/Terms";
import {ArrowBtn} from "./ArrowBtn";

export class LevelComponent extends Component {

    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>
                    {level(false)}
                    {abilityIntro()}
                    <ArrowBtn url={'/abilities'} back={false} text={titleCase(terms.ability.plural)}/>
                    {hitDice()}
                    <ArrowBtn url={'/hitpoints'} back={false} text={titleCase(terms.hit.points.plural)}/>
                </div>
            </div>
        );
    }
}
