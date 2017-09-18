import React from 'react';

export default class Bed extends React.Component {
    render() {
        return (
            <div>
                <h1>Bed #{this.props.bedNumber}</h1>
                <button onClick={this.props.reserveBed}>Reserve</button>
                <button onClick={this.props.freeBed}>Free</button>
            </div>
        );
    }
}