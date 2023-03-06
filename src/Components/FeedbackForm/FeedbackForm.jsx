import React from 'react';
// import css from './FeedbackForm.module.css';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from 'Components/Section/Section';
import Notification from '../Notification/Notification';

const FeedbackForm = ({ good, bad, neutral, onLeaveFeedback, countTotalFeedback, count }) => (
  // <h1 className={css.title}></h1>

  <>
    <Section title="Please leave feedback">
      <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
    </Section>
    {countTotalFeedback !== 0 ? (
      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={count}
        ></Statistics>
      </Section>
    ) : (
      <Notification message="There is no feedback"></Notification>
    )}

    {/* <div>
      <h2 className={css.statisticstitle}>Statistics</h2>
    </div> */}
  </>
);

export default FeedbackForm;
