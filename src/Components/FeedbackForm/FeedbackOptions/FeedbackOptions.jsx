import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div className={css.btnlist}>
    <button onClick={onLeaveFeedback} className={css.button} type="button">
      Good
    </button>
    <button onClick={onLeaveFeedback} className={css.button} type="button">
      Neutral
    </button>
    <button onClick={onLeaveFeedback} className={css.button} type="button">
      Bad
    </button>
  </div>
);

export default FeedbackOptions;
