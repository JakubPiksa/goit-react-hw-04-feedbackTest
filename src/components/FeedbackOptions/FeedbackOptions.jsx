import React, { useState, useEffect } from 'react';
import css from './feedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback }) => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleFeedbackClick = (option) => {
    handleFeedback(option);

    switch (option) {
      case 'good':
        setGoodCount((prevCount) => prevCount + 1);
        break;
      case 'neutral':
        setNeutralCount((prevCount) => prevCount + 1);
        break;
      case 'bad':
        setBadCount((prevCount) => prevCount + 1);
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    const totalFeedback = goodCount + neutralCount + badCount;
    handleFeedback({
      good: goodCount,
      neutral: neutralCount,
      bad: badCount,
      total: totalFeedback,
    });
  }, [goodCount, neutralCount, badCount, handleFeedback]);

  return (
    <div className={css.buttonContainer}>
      <button onClick={() => handleFeedbackClick('good')} className={css.button}>
        Good
      </button>
      <button onClick={() => handleFeedbackClick('neutral')} className={css.button}>
        Neutral
      </button>
      <button onClick={() => handleFeedbackClick('bad')} className={css.button}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
