import React from "react";
import {Link} from "react-router-dom";

const Country = (props) => (
    <div className="country__container">
        {
            props.nations.map(nation => (
                <Link className="country" to={`/search/${nation.name}`}>
                    <div key={nation.name}>
                        <h1>{nation.name}</h1>
                        <img src={nation.flag} width="200px" alt={nation.flag}/>
                        <p>Nation: {nation.demonym}</p>
                        <p>Capital: {nation.capital}</p>
                        <p>Sub region: {nation.subregion}</p>
                    </div>
                </Link>
            ))
        }
    </div>
);


export default Country;

