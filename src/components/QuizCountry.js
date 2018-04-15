import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from '../countrydata';

class QuizDemonym extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {
            countryObj: Object.values(Data),
            showReview: null,
            randomQuiz: Math.floor(Math.random() * 250),
        };
    }
    onClick = (e) => {
        if (e.target.value === this.state.countryObj[this.state.randomQuiz].name) {
            this.setState({ showReview: true })
        }
    }
    newQuiz = () => {
        console.log("you click. this")
        this.setState({
            showReview: null,
            randomQuiz: Math.floor(Math.random() * 250), 
        })
    }

    render() {
        const countryObjLength = this.state.countryObj.length;
        const randomAnswerGenerator = (number) => Math.floor(Math.random() * number);
        const answerArr = [
            this.state.countryObj[this.state.randomQuiz].name,
            this.state.countryObj[randomAnswerGenerator(countryObjLength)].name,
            this.state.countryObj[randomAnswerGenerator(countryObjLength)].name,
            this.state.countryObj[randomAnswerGenerator(countryObjLength)].name,
            this.state.countryObj[randomAnswerGenerator(countryObjLength)].name
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
        return (
            <div className="quiz-sub__container">
                <h1>이 국기는 무슨 나라에요?</h1>
                <img width="200px" src={this.state.countryObj[this.state.randomQuiz].flag} alt={this.state.countryObj[this.state.randomQuiz].name}/>
                {
                    shuffle(answerArr).map(answer => (
                        <div>
                            <button value={answer} onClick={this.onClick}>{answer}</button>
                        </div>
                    ))
                }
                {
                    this.state.showReview &&
                    <div>
                        <h1>잘했어요!</h1>
                        <Link to="/Quiz/demonym"><button onClick={this.newQuiz}>Next</button></Link>
                    </div>
                }
            </div>
        );
    }
}
export default QuizDemonym;
