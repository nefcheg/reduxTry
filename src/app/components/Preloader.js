import React, { Component } from 'react';
import '../../css/App.css';

export default class Preloader extends Component{
    render() {
        return (
            <div className="spinner">
                <div className="bounce1"/>
                <div className="bounce2"/>
                <div className="bounce3"/>
            </div>
        );
    }
};

