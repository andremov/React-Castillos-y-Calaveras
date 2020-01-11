import React, {Component} from 'react';
import {death, hitDice, hitPoints, knockedOut, level, maxHitPoints, noHitPoints, stableDeath} from "../Parts";

export class HitPointComponent extends Component {
    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>
                    {hitPoints(false)}
                    {maxHitPoints()}
                    {hitDice()}
                    {noHitPoints()}
                    {death()}
                    {knockedOut()}
                    {stableDeath()}
                </div>
            </div>
        );
    }
}
