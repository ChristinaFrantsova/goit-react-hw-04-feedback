import { useState } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = event => {
    const option = event.target.name;

    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() !== 0) {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };

  const total = countTotalFeedback();

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={onButtonClick}
          options={['good', 'neutral', 'bad']}
        />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            style={{ display: 'flex', flexDirection: 'column' }}
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
