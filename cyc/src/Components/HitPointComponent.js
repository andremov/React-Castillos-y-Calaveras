import React, {Component} from 'react';
import {death, healing, hitDice, hitPoints, knockedOut, maxHitPoints, noHitPoints, stableDeath} from "../Parts";
import {titleCase} from "../Utilities";
import {terms} from "../Data/Terms";
import {ArrowBtn} from "./ArrowBtn";

export class HitPointComponent extends Component {
    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>
                    {hitPoints(false)}
                    {healing()}
                    <ArrowBtn url={'/rest'} back={false} text={titleCase(terms.rest.inf)}/>
                    <ArrowBtn url={'/hitpoints'} back={false} text={titleCase(terms.hit.points.plural)}/>
                    {maxHitPoints()}
                    <ArrowBtn url={'/level'} back={false} text={titleCase(terms.level.singular)}/>
                    <ArrowBtn url={'/abilities'} back={false} text={titleCase(terms.ability.plural)}/>
                    {hitDice()}
                    {noHitPoints()}
                    {death()}
                    {knockedOut()}
                    {stableDeath()}
                    <ArrowBtn url={'/rolls/saving'} back={false} text={titleCase(terms.rolls.saving.plural)}/>
                </div>
            </div>
        );
    }
}
