import React from "react";

const QuizCountry = (props) => {
    const countryObj = Object.values(props.nation);
    const countryObjLength = countryObj.length;
    const randomQuiz = Math.floor(Math.random() * countryObjLength);
    const randomAnswerGenerator = (number) => Math.floor(Math.random() * number);
    console.log(countryObj[randomAnswerGenerator(countryObjLength)].name);
    return (
        <div>
            <h1>이 국기의 나라는 뭐에요?</h1>
                <img width="200px" src={countryObj[randomQuiz].flag} />
                <input type="checkbox" value={countryObj[randomQuiz].flag}/><label>{countryObj[randomQuiz].name}</label>
                <input type="checkbox" value={countryObj[randomAnswerGenerator(countryObjLength)].name}/><label>{countryObj[randomAnswerGenerator(countryObjLength)].name}</label>
                <input type="checkbox" value={countryObj[randomAnswerGenerator(countryObjLength)].name}/><label>{countryObj[randomAnswerGenerator(countryObjLength)].name}</label>
        </div>
    )
};


export default QuizCountry;