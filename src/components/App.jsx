import { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // onGoodClick = () => {
  //   this.setState(prevState => ({ good: prevState.good + 1 }));
  // };
  // onNeutralClick = () => {
  //   this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  // };
  // onBadClick = () => {
  //   this.setState(prevState => ({ bad: prevState.bad + 1 }));
  // };

  onButtonClick = evt => {
    const buttonName = evt.target.name;
    this.setState(prevState => ({ [buttonName]: prevState[buttonName] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    }
  };

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    // console.log(Object.keys(this.state));

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onButtonClick}
            options={Object.keys(this.state)}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
