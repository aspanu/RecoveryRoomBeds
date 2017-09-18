import React from 'react';
import Bed from './Bed.js';

export default class BedList extends React.Component {
    getInitialState() {
        return {
            numBeds: 10,
        }
    };
    render() {
        var beds = []
        for (var i=1; i <= this.props.numBeds; i++) {
            beds.push(<Bed bedNumber={i}/>);
        }

        return (
            <div>{beds}</div>
        );
    };
}