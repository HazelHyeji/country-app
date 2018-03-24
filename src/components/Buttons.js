import React from "react";
import {Link} from 'react-router-dom';
const Buttons = () => (
    <div>
        <Link to="/Search"><button>Search</button></Link>
        <Link to="/AllCountry"><button>All Country</button></Link>
        <Link to="/Quiz" className="hansans"><button>한글</button></Link>
    </div>
);


export default Buttons;

