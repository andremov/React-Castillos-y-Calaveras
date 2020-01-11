import React, {Component} from 'react';
import {alignment} from "../Parts";

export class AlignmentComponent extends Component {

    render() {
        return (
            <div className={'page'}>
                <div className={'page-body'}>
                    {alignment(false)}
                </div>
            </div>
        );
    }
}
