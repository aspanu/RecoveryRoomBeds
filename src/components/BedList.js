import React from 'react';
import Bed from './Bed.js';

export default class BedList extends React.Component {
    getInitialState() {
        return {
            bedFree: Array(this.props.numBeds).fill(true),
        }
    };
    reserveBed(i) {
        this.state.bedFree[i] = false;
        return;
    };
    freeBed(i) {
        this.state.bedFree[i] = true;
        return;
    };
    render() {
        var beds = []
        this.props.beds.forEach(function(i) {
            beds.push(
                <Bed 
                    bedNumber={i} 
                    reserveBed={() => this.props.toReserve(i)}
                    freeBed={() => this.props.toFree(i)}
                />
            );
        }, 
        this);

        return (
            <div>{beds}</div>
        );
    };
}