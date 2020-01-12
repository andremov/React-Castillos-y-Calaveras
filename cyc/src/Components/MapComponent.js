import React, {Component} from 'react';
import {map1} from '../maps/1.png';
import {map2} from '../maps/2.svg';
import {map3} from '../maps/3.png';
import {map4} from '../maps/4.svg';
import {map5} from '../maps/5.svg';
import {map6} from '../maps/6.svg';
import {map7} from '../maps/7.svg';
import {map8} from '../maps/8.png';
import {map9} from '../maps/9.png';
import {map10} from '../maps/10.png';
import {map11} from '../maps/11.png';

export class MapComponent extends Component {
    render() {
        return (
            <div>
                <img src={map1} alt='' />
                <img src={map2} alt='' />
                <img src={map3} alt='' />
                <img src={map4} alt='' />
                <img src={map5} alt='' />
                <img src={map6} alt='' />
                <img src={map7} alt='' />
                <img src={map8} alt='' />
                <img src={map9} alt='' />
                <img src={map10} alt='' />
                <img src={map11} alt='' />
            </div>
        );
    }
}
