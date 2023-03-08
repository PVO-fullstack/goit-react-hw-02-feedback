import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.btnlist}>
      {options.map(nameEl => (
        <button onClick={onLeaveFeedback} className={css.button} type="button">
          {nameEl}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
