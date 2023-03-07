import React, { Component } from 'react';
// import css from './FeedbackForm.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from 'Components/Section/Section';
import Notification from '../Notification/Notification';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = e => {
    const value = e.target.textContent.toLowerCase();
    for (const key in this.state) {
      if (value === key) {
        this.setState(prevState => ({
          ...prevState,
          [key]: prevState[key] + 1,
        }));
      }
    }
  };
  render() {
    let countPositiveFeedbackPercentage = 0;
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    if (countTotalFeedback !== 0) {
      countPositiveFeedbackPercentage = Math.round((good / countTotalFeedback) * 100);
    }

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.leaveFeedback} />
        </Section>
        {countTotalFeedback !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            ></Statistics>
          </Section>
        ) : (
          <Notification message="There is no feedback"></Notification>
        )}
      </>
    );
  }
}

export default FeedbackForm;
