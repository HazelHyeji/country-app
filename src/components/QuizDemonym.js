import React from "react";

const QuizDemonym = (props) => {
    const countryObj = Object.values(props.nation);
    const countryObjLength = countryObj.length;
    const randomQuiz = Math.floor(Math.random() * countryObjLength);
    const randomAnswerGenerator = (number) => Math.floor(Math.random() * number);
    const answerArr = [
        countryObj[randomQuiz].demonym,
        countryObj[randomAnswerGenerator(countryObjLength)].demonym,
        countryObj[randomAnswerGenerator(countryObjLength)].demonym,
        countryObj[randomAnswerGenerator(countryObjLength)].demonym,
        countryObj[randomAnswerGenerator(countryObjLength)].demonym
    ];
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
    const showReview = false;
    const onClick = (e) => {
        console.log(e.target.value);
        console.log(countryObj[randomQuiz].demonym);
        if(e.target.value === countryObj[randomQuiz].demonym){
            console.log('Youre right!');
        }
    }
    return (
        <div>
            <h1>{countryObj[randomQuiz].name}의 국민들은 영어로 어떻게 말할까요?</h1>
            <img width="200px" src={countryObj[randomQuiz].flag} />
            <h2>{countryObj[randomQuiz].name}</h2>
            {
                shuffle(answerArr).map(answer => (
                    <div>
                        <button value={answer} onClick={onClick}>{answer}</button>
                    </div>
                ))
            }
            {showReview && <h1>Try again</h1>}
        </div>
    )
}




export default QuizDemonym;