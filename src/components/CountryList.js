import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '../countrydata';

export default class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nations: Data,
        };
    }

    render() {
        const linkList = this.state.nations.map((nation, i) => {
            return (
                <li key={i}>
                    <Link to={`/AllCountry/${nation.name}`}>
                        <img src={nation.flag} width="100px" alt={nation.name}/>
                        <h1>{nation.name}</h1>
                    </Link>
                </li>
            )

        })
        return (
            <div>
                <ul>
                    {linkList}
                </ul>
            </div>
        );
    }
}
