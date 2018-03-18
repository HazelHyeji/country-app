import React from "react";
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
const GoBack = () => (
    <div>
        <Link to="/"><FontAwesome name="chevron-left" />Goback</Link>
    </div>
);


export default GoBack;
