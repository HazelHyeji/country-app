import React from "react";
import {Link} from 'react-router-dom';
const Buttons = () => (
    <div className="buttons">
        <Link to="/Search"><button>Search</button></Link>
        <Link to="/AllCountry"><button>All Country</button></Link>
        <Link to="/Quiz"><button>Quiz</button></Link>
    </div>
);


export default Buttons;

