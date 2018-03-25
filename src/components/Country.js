import React from "react";

const Country = (props) => (
    <div className="country__container">
        {
            props.nations.map(nation => (
                <div className="country" key={nation.name}>
                    <h1>{nation.name}</h1>
                    <img src={nation.flag} width="200px" alt={nation.flag}/>
                    <p>{nation.demonym}</p>
                    <p>{nation.capital}</p>
                </div>
            ))
        }
    </div>
);


export default Country;

