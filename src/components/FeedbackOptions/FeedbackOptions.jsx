import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className="feedback-options">
    {options.map(option => (
      <button
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className="button-style"
      >
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
