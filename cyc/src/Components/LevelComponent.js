import React, {Component} from 'react';
import {abilityIntro, hitDice, level} from "../Parts";

export class LevelComponent extends Component {

    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>
                    {level(false)}
                    {abilityIntro()}
                    {hitDice()}
                </div>
            </div>
        );
    }
}
