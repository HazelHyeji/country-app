import React from "react";
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Data from '../countrydata';

const CountryDetail = ({match}) => {
    console.log(match.params.nationId);
    const nation = Data.find(n => n.name === match.params.nationId);
    return (
        <div>
            <Link to="/AllCountry"><FontAwesome name="chevron-left" />Goback</Link>
            <div>
                <h1>{nation.name}</h1>
                <img src={nation.flag} width="200px" alt={nation.name}/>
                <p>이 나라 사람들은 {nation.demonym}</p>
                <p>수도는 {nation.capital}</p>
                <p>{nation.languages[0].name}라는 언어를 사용해요.</p>
                <p>{nation.subregion}에 있어요</p>
                <p>인구수는 {nation.population}명이에요</p>
                <p>통화는 {nation.currencies[0].name}을 사용해요. 심볼은 {nation.currencies[0].symbol} 이렇구요. 코드는 {nation.currencies[0].code}랍니다</p>
                <p>{nation.topLevelDomain}이라는 도메인을 사용할 수 있어요!!! :D</p>
            </div>
        </div>
    )
}


export default CountryDetail;