import React from 'react';

export default class Bed extends React.Component {
    render() {
        return (
            <div>
                <h1>Bed #{this.props.bedNumber}</h1>
            </div>
        );
    }
}