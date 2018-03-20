import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Data from '../countrydata';
import GoBack from './GoBack';
import QuizDemonym from './QuizDemonym';
import QuizCountry from './QuizCountry';

const Quiz = props => {
    return (
        <div>
            <GoBack />
            <ul>
                <li>
                    <Link to={`${props.match.url}/demonym`}>국민들</Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/country`}>나라들</Link>
                </li>
            </ul>
            <Route path={`${props.match.url}/demonym`} component={QuizDemonym} />
            <Route path={`${props.match.url}/country`} component={QuizCountry} />
        </div>
    );
}
export default Quiz;