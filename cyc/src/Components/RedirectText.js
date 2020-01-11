import React, {Component} from 'react';
import {Link} from "react-router-dom";

export class RedirectText extends Component {

    state = {
        text : "",
        url : ""
    };

    componentDidUpdate() {
        this.updateState();
    }

    componentDidMount() {
        this.updateState();
    }

    updateState() {
        if (this.props.text !== this.state.text || this.props.url !== this.state.url) {
            this.setState({
                text : this.props.text,
                url : this.props.url
            })
        }
    }

    render() {
        let {text, url} = this.state;
        return (
            <Link to={url} className={'more-info-btn'}>
                {text}
            </Link>
        );
    }
}
