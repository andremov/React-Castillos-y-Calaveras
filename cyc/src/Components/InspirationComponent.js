import React, {Component} from 'react';
import {inspirationGain, inspirationIntro, inspirationUse} from "../Parts";

export class InspirationComponent extends Component {

    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>
                    {inspirationIntro(false)}
                    {inspirationGain()}
                    {inspirationUse()}
                </div>
            </div>
        );
    }

}
