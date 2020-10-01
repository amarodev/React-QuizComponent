import React, { Component } from 'react';
//npm import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component{

  constructor(props){
    super(props)
    this.state = {
      incorrectAnswer : false
    }
  }

    render(){
        return       <main>
        <section>
          <p>// instruction text goes here</p>
        </section>
        <section className="buttons">
          <ul>
            //quiz question button logic goes here
          </ul>
        </section>
      </main>
    }

    handleClick(buttonText){
      if(buttonText === this.props.quiz_question.answer){
        this.setState({ incorrectAnswer : false })
        this.props.showNextQuestionHandler();
      }
      else{
        this.setState({ incorrectAnswer : true })
      }
    }
}

export default QuizQuestion