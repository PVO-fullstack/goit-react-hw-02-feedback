import React, { Component } from 'react';
import Statistics from '../Statistics';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Notification from '../Notification';

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

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback !== 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        {this.countTotalFeedback() !== 0 ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
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
