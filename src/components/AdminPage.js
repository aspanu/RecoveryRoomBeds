import React from 'react';
import BedList from './BedList.js';

export default class AdminPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className = "adminPage">
                    <BedList numBeds="10"/>
                </div>
            </div>
        );
    }
}