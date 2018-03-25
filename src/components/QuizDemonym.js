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
        if (e.target.value === this.state.countryObj[this.state.randomQuiz].demonym) {
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
            this.state.countryObj[this.state.randomQuiz].demonym,
            this.state.countryObj[randomAnswerGenerator(countryObjLength)].demonym,
            this.state.countryObj[randomAnswerGenerator(countryObjLength)].demonym,
            this.state.countryObj[randomAnswerGenerator(countryObjLength)].demonym,
            this.state.countryObj[randomAnswerGenerator(countryObjLength)].demonym
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
            <div>
                <h1>{this.state.countryObj[this.state.randomQuiz].name}의 국민들은 영어로 어떻게 말할까요?</h1>
                <img width="200px" src={this.state.countryObj[this.state.randomQuiz].flag} alt={this.state.countryObj[this.state.randomQuiz].name}/>
                <h2>{this.state.countryObj[this.state.randomQuiz].name}</h2>
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
                        <h1>you got it right!{this.state.countryObj[this.state.randomQuiz].demonym} </h1>
                        <Link to="/Quiz/demonym"><button onClick={this.newQuiz}>Next</button></Link>
                    </div>
                }
            </div>
        );
    }
}
export default QuizDemonym;
