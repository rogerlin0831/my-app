import PropTypes from 'prop-types';

const Button = ({ _text, _backgroundColor, _onClick, _showadd }) => {
  return (
    <button style={{ backgroundColor: { _backgroundColor } }} className="btn" onClick={_onClick}>
      {_text}
    </button>
  );
};

Button.defaultProps = {
  _text: 'Add',
  _backgroundColor: 'Blue',
};

Button.propTypes = {
  _text: PropTypes.string,
  _onClick: PropTypes.func,
};

export default Button;
