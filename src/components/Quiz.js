import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import QuizList from './QuizList';
import Data from '../countrydata';
import GoBack from './GoBack';
import QuizDemonym from './QuizDemonym';
import QuizCountry from './QuizCoutry';

class Quiz extends React.Component {
    constructor(props) {
        super(props);
        let match = props.match;
        this.state = {
            nations: Data,
        };
    }
    render() {
        const countryObj = Object.values(this.state.nations);
        const countryObjLength = countryObj.length;
        const randomQuizGenerator = (number) => Math.floor(Math.random() * number);
        console.log(countryObj[randomQuizGenerator(countryObjLength)].name);
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
                <h1>이 나라 뭐라고 발음 돼요 한국어로?</h1>
                <p>{countryObj[randomQuizGenerator(countryObjLength)].name}</p>
                <img width="200px" src={countryObj[randomQuizGenerator(countryObjLength)].flag} />
                <QuizList nations={countryObj[randomQuizGenerator(countryObjLength)]} />
                <Route path={`${this.props.match.url}/demonym`} component={() => <QuizDemonym nation={countryObj[randomQuizGenerator(countryObjLength)]}/>} />
                <Route path={`${this.props.match.url}/country`} component={() => <QuizCountry nation={countryObj[randomQuizGenerator(countryObjLength)]}/>} />
            </div>
        );
    }
}
export default Quiz;