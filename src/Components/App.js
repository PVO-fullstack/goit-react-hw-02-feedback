import React, { Component } from "react";
import './App.css';
import FeedbackForm from "./FeedbackForm"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };



  handleGoodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralIncrement = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadIncrement = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };


  leaveFeedback = (e) => {
    const value = e.target.textContent.toLowerCase();
    if (value === 'bad') {
      this.handleBadIncrement();
    }
    else if (value === 'good') {
      this.handleGoodIncrement();
    }
    else if (value === 'neutral') {
      this.handleNeutralIncrement();
    }
  }

  render() {
    let countPositiveFeedbackPercentage = 0;
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    if (countTotalFeedback !== 0) {
      countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);
    }

    return (
      <div className="App">
        <FeedbackForm countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          good={good}
          neutral={neutral}
          bad={bad}
          onLeaveFeedback={this.leaveFeedback}
          countTotalFeedback={countTotalFeedback}
          count={countPositiveFeedbackPercentage}
        ></FeedbackForm>
      </div>
    );
  }

}

export default App;
