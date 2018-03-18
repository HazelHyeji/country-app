import React from "react";

const QuizDemonym = (props) => {
    const countryObj = Object.values(props.nation);
    const countryObjLength = countryObj.length;
    const randomQuiz = Math.floor(Math.random() * countryObjLength);
    const randomAnswerGenerator = (number) => Math.floor(Math.random() * number);
    const answerArr = [countryObj[randomQuiz].demonym, countryObj[randomAnswerGenerator(countryObjLength)].demonym, countryObj[randomAnswerGenerator(countryObjLength)].demonym];
    const shuffle = (array) => {
        let counter = array.length;
        
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
            
            // Decrease counter by 1
            counter--;
            
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
    console.log(answerArr);
    // Pseudocode:
    // 1. Put the data inside an array of objects (NOT hardcoded in the JSX)
    // 1 correct + 2 random

    // 2. Make another variable which randomizes the order of that array

    // 3. Render that array by mapping through it in the JSX below
    // Only write <input> ONCE

    return (
        <div>
            <h1>{countryObj[randomQuiz].name}의 국민들은 영어로 어떻게 말할까요?</h1>
            <img width="200px" src={countryObj[randomQuiz].flag} />
            <h2>{countryObj[randomQuiz].name}</h2>
            {
                shuffle(answerArr).map(answer => (
                    <div>
                    <input type="checkbox"/><label>{answer}</label>
                    </div>
                ))
            }
        </div>
    )
}




export default QuizDemonym;