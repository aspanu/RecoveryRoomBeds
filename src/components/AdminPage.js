import React from 'react';
import BedDisplay from './BedDisplay.js';

export default class AdminPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="indexPage">
                    <BedDisplay numBeds="10"/> 
                </div>
            </div>
        );
    }
}