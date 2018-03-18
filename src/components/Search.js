import React, {Component} from "react";
import GoBack from "./GoBack";
import Country from "./Country";

export default class Search extends Component {
    state = {
        searchfield: '',
        nations: [],
    }
    onSearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
        console.log(this.state.searchfield);
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
        const filteredNation = this.state.nations.filter(nation => {
            return nation.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        console.log(filteredNation)
        return (
            <div>
                <GoBack />
                <input
                    type="text"
                    placeholder="Search Country"
                    onChange={this.onSearchChange}
                />
                {this.state.searchfield ? <Country nations={filteredNation}/> : <h1>Search Country!</h1>}
            </div>
        );
    }
}


