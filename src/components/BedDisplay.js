import React from 'react';
import BedList from './BedList.js';

export default class BedDisplay extends React.Component {
    getInitialState() {
        return {
            isBedFree: Array(this.props.numBeds).fill(true),
        }
    };

    reserveBed(i) {
        fillBed(i, false);
    };
    freeBed(i) {
        fillBed(i, true);
    };

    fillBed(i, fillValue) {
        const isBedFree = this.state.isBedFree.slice();
        isBedFree[i] = fillValue;
        this.setState({isBedFree: isBedFree})
    }

    getFreeBedIndices() {
        var indices = [];
        for (var i=0; i<this.state.isBedFree.length; i++) {
            if (this.state.bedsFree[i]) {
                indices.push(i);
            }
        }
        return indices;
    }

    getUsedBedIndices() {
        var indices = [];
        for (var i=0; i<this.state.isBedFree.length; i++) {
            if (!this.state.bedsFree[i]) {
                indices.push(i);
            }
        }
        return indices;
    }

    render() {
        return (
            <div>
                <BedList 
                    beds={this.getFreeBedIndices(this.state.isBedFree)}
                    toReserve={(i) => this.reserveBed(i)}
                    toFree={(i) => this.freeBed(i)}
                />
                <BedList 
                    beds={this.getUsedBedIndices(this.state.isBedFree)}
                    toReserve={(i) => this.reserveBed(i)}
                    toFree={(i) => this.freeBed(i)}
                />
            </div>
        );
    };
}