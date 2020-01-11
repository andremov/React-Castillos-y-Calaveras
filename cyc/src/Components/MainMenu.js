import React, {Component, Fragment} from 'react';
import '../navmenu.scss';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
import {tree} from "../Tree";
import d20 from '../assets/d20.svg';

export class MainMenu extends Component {
    render() {
        return (
            <div className={'nav-menu'}>
                <Router>
                    {
                        tree.map(item =>
                            item.hidden? <Fragment key={'Menu-'+tree.indexOf(item)}> </Fragment> :
                            <NavLink key={'Menu-'+tree.indexOf(item)} className={'nav-btn serif header3'} to={item.path}>
                                <span className={'text'}>{item.title}</span>
                                <img className={'dragon'} alt={""} src={d20} onClick={this.props.onClick} />
                            </NavLink>
                        )
                    }
                </Router>
            </div>
        );
    }
}
