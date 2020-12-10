import React, {Component} from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import classes from './Quiz.module.scss'

class Quiz extends Component {

  state = {
    activeQuestion: 0,
    quiz: [
      { 
        rightAnswerID: 4,
        question: 'Minsk is a capital of?',
        id: 1,
        answers: [
          {text: 'China', id: 1},
          {text: 'Spain', id: 2},
          {text: 'Poland', id: 3},
          {text: 'Belarus', id: 4}
        ]
      },
      { 
        rightAnswerID: 1,
        question: 'Rome is a capital of?',
        id: 2,
        answers: [
          {text: 'Italy', id: 1},
          {text: 'Argentina', id: 2},
          {text: 'Russia', id: 3},
          {text: 'Egypt', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerID) => {
    console.log('Answer ID:', answerID)
    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>QUIZ</h1>
          <ActiveQuiz 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            answerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz