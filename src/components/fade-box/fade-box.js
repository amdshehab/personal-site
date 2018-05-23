import React, { Component } from 'react';
import './fade-box.css';

export class FadeBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startFade: false
        }
    }
    componentDidMount = () => {
        this.setState({
            startFade: true
        });
    }

    render() {

        const box = {
            width: '300px',
            height: '300px',
            border: '1px solid black',
            backgroundColor: 'dimgray'
        };

        return (
            <div style={box} className={this.props.direction + '' + 'main-container'}>
                <span className="text-box">
                    Hello
                </span>
                <span className="top-flick" />
                <span className="right-flick" />
                <span className="bottom-flick" />
                <span className="left-flick" />
            </div>
        );
    }
}