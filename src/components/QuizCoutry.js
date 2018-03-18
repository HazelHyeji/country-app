import React from "react";

const QuizCountry = () => (
    const countryObj = Object.values(props.nation);
    const countryObjLength = countryObj.length;
    const randomQuiz = Math.floor(Math.random() * countryObjLength);
    const randomAnswerGenerator = (number) => Math.floor(Math.random() * number);
    console.log(countryObj[randomAnswerGenerator(countryObjLength)].name);
    return (
        <div>
            <h1>{countryObj[randomQuiz].name}의 국민들은 영어로 어떻게 말할까요?</h1>
                <img width="200px" src={countryObj[randomQuiz].flag} />
                <h2>{countryObj[randomQuiz].name}</h2>
                <input type="checkbox" value={countryObj[randomQuiz].flag}/><label>{countryObj[randomQuiz].demonym}</label>
                <input type="checkbox" value={countryObj[randomAnswerGenerator(countryObjLength)].demonym}/><label>{countryObj[randomAnswerGenerator(countryObjLength)].demonym}</label>
                <input type="checkbox" value={countryObj[randomAnswerGenerator(countryObjLength)].demonym}/><label>{countryObj[randomAnswerGenerator(countryObjLength)].demonym}</label>
        </div>
    )
);


export default QuizCountry;