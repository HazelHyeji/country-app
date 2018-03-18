import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Data from '../countrydata';
import GoBack from './GoBack';
import QuizDemonym from './QuizDemonym';
import QuizCountry from './QuizCountry';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        let match = props.match;
        this.state = {
            nations: Data,
        };
    }
    render() {
        return (
            <div>
                <GoBack />
                <ul>
                    <li>
                        <Link to={`${this.props.match.url}/demonym`}>국민들</Link>
                    </li>
                    <li>
                        <Link to={`${this.props.match.url}/country`}>나라들</Link>
                    </li>
                </ul>
                <Route path={`${this.props.match.url}/demonym`} component={() => <QuizDemonym nation={this.state.nations}/>} />
                <Route path={`${this.props.match.url}/country`} component={() => <QuizCountry nation={this.state.nations}/>} />
            </div>
        );
    }
}
export default Quiz;