import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </button>
        );
      })}

      {/* <button type="button" name="good" onClick={onLeaveFeedback}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback}>
        Bad
      </button> */}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
