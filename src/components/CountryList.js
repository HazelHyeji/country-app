import React, { Component } from 'react';


export default class CountryList extends Component {
    state = {
        nations: [],
    }
    componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(nations => {
                console.log("Nations:", nations);
                this.setState({ nations: nations });
            })
            .catch(error => console.log("error!", error))
    }
    
    
    render() {
        return (
            <div>
                {
                    this.state.nations.map(nation => (
                        <div key={nation.name}>
                            <h1>{nation.name}</h1>
                            <img src={nation.flag} width="200px" />
                            <p>{nation.demonym}</p>
                            <p>{nation.capital}</p>
                        </div>
                    ))
                }
            </div>
        );
    }
}
