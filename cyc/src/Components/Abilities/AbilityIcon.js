import React, {Component} from 'react';
import about from '../../assets/about.svg';
import str from '../../assets/str.svg';
import dex from '../../assets/dex.svg';
import con from '../../assets/con.svg';
import wis from '../../assets/wis.svg';
import int from '../../assets/int.svg';
import cha from '../../assets/cha.svg';

export class AbilityIcon extends Component {
    state = {
        ability : -1,
        tooltip : "",
        icons : [
            about, str, dex, con, int, wis, cha
        ]
    };

    componentDidMount() {
        this.setState({
            ability : this.props.ability,
            tooltip : this.props.tooltip
        })
    }

    render() {
        let icon = this.state.icons[this.state.ability];
        let tooltip = this.state.tooltip;
        return (
            <div className={'ability-icon'}>
                <span className="tooltip">{tooltip}</span>
                <img alt={""} src={icon} onClick={this.props.onClick} />
            </div>
        );
    }
}
