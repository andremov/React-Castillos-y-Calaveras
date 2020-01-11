import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";

export class ArrowBtn extends Component {

    state = {
        text : "",
        url : "",
        back : false
    };

    componentDidUpdate() {
        this.updateState();
    }

    componentDidMount() {
        this.updateState();
    }

    updateState() {
        if (this.props.text !== this.state.text || this.props.url !== this.state.url || this.props.back !== this.state.back) {
            this.setState({
                text : this.props.text,
                url : this.props.url,
                back : this.props.back
            })
        }
    }

    render() {
        let {text, url, back} = this.state;
        return (
            <Link to={url} className={'arrow-btn serif '+(!back? 'border-left' : 'border-right')}>
                {back?
                    <div className={'arrow-btn-head'}>
                    </div>
                :
                    <Fragment></Fragment>
                }
                <div className={'arrow-btn-body'}>
                    {text}
                </div>
                {!back ?
                    <div className={'arrow-btn-tail'}>
                    </div>
                    :
                    <Fragment></Fragment>
                }
            </Link>
        );
    }
}
