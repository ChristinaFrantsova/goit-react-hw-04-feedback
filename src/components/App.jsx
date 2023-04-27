import { Component } from 'react';
// import PropTypes from 'prop-types';

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
    const { good, neutral, bad } = this.state;

    return (
      <div className="container">
        <section>
          <h2>Please leave feedback</h2>
          <div>
            <button type="button" name="good" onClick={this.onButtonClick}>
              Good
            </button>
            <button type="button" name="neutral" onClick={this.onButtonClick}>
              Neutral
            </button>
            <button type="button" name="bad" onClick={this.onButtonClick}>
              Bad
            </button>
          </div>
        </section>
        <section>
          <h2>Statistics</h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <span>Good: {good}</span>
            <span>Neutral: {neutral}</span>
            <span>Bad: {bad}</span>
            <span>Total: {this.countTotalFeedback()}</span>
            <span>
              Positive feedback: {this.countPositiveFeedbackPercentage()}%
            </span>
          </div>
        </section>
      </div>
    );
  }
}
