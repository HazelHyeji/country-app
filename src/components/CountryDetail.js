import React, { Component } from "react";
import Data from '../countrydata';

class CountryDetail extends Component {
    constructor(props) {
        super(props);
    }

    onPlay(sounds) {
        const sound = new Audio(sounds);
        sound.play();
    }
    render() {
        console.log(this.props.match.params.nationId);
        const nation = Data.find(n => n.name === this.props.match.params.nationId);
        return (
            <div>
                <button className="detail__button" onClick={this.props.history.goBack}>Goback</button>
                <h1 className="detail__title">{nation.name}</h1>
                <div className="detail__container">
                    <img src={nation.flag} width="200px" alt={nation.name} />
                    <p>이 나라 사람들은 <span>{nation.demonym}</span></p>
                    <p>수도는 <span>{nation.capital}</span></p>
                    <p>언어로는 <span>{nation.languages[0].name}</span>를 사용해요.</p>
                    <p><span>{nation.subregion}</span>에 있어요</p>
                    <p>인구수는 <span>{nation.population}</span>명이에요</p>
                    <p>통화는 <span>{nation.currencies[0].name}</span>을 사용해요. 심볼은 {nation.currencies[0].symbol} 이렇구요. 코드는 {nation.currencies[0].code}랍니다</p>
                    <p><span>{nation.topLevelDomain}</span>이라는 도메인을 사용할 수 있어요!!! :D</p>
                    <button onClick={() => this.onPlay(nation.nameaudio)}>play</button>
                </div>
            </div>
        );
    }
}
export default CountryDetail;
