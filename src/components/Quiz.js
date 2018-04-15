import React from 'react';
import { Route, Link } from 'react-router-dom';
import GoBack from './GoBack';
import QuizDemonym from './QuizDemonym';
import QuizCountry from './QuizCountry';

const Quiz = props => {
    return (
        <div className="quiz__container">
            <GoBack />
            <ul>
                <li>
                    <Link to={`${props.match.url}/demonym`}>국민</Link>
                </li>
                <li>
                    <Link to={`${props.match.url}/country`}>국기</Link>
                </li>
            </ul>
            <Route path={`${props.match.url}/demonym`} component={QuizDemonym} />
            <Route path={`${props.match.url}/country`} component={QuizCountry} />
        </div>
    );
}
export default Quiz;