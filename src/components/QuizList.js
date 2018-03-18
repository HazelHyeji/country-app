import React from "react";

const QuizList = (props) => {
    return (
        <div>
            <h1>What is this country? this is from Quiz list</h1>
            <div>
                <img width="200px"src={props.nations.flag}/>
            </div>
        </div>
    )
};


export default QuizList;

