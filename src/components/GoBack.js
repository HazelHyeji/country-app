import React from "react";
import {Link} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
const GoBack = () => (
    <div class="goback">
        <Link to="/"><FontAwesome name="chevron-left"/>Go back</Link>
    </div>
);


export default GoBack;
