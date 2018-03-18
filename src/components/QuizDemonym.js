import React from "react";

const QuizDemonym = (props) => (
    <div>
    <h1>What is this country? this is from QuizDemonym list</h1>
    <div>
        <img width="200px" src={props.nation.flag}/>
    </div>
    </div>
);


export default QuizDemonym;