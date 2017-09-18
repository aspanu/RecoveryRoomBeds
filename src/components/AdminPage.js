import React from 'react';
import BedList from './BedList.js';
import Bed from './Bed.js';

export default class AdminPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="indexPage">
                    <BedList numBeds="10"/> 
                </div>
            </div>
        );
    }
}