import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button
            key={option}
            type="button"
            name={option}
            onClick={onLeaveFeedback}
          >
            {option}
          </Button>
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
