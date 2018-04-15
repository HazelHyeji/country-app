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
    // data ㅇㅔ서 가져온 나라를 loop 해서  nation 에 대한 url을 만든다
    
    render() {
        const linkList = this.state.nations.map((nation) => {
            return (
                <li key={nation.name}>
                    <Link to={`/AllCountry/${nation.name}`}>
                        <img src={nation.flag} width="200px" alt={nation.name}/>
                        <h2>{nation.name}</h2>
                    </Link>
                </li>
            )

        })
        return (
            <div class="countrylist__container">
                <h1>All around the world!!</h1>
                <ul className="countrylist">
                    {linkList}
                </ul>
            </div>
        );
    }
}
