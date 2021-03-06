import PropTypes from 'prop-types';
import Button from '../components/Button';

const Header = Props => {
  const onClick = () => {
    console.log('fu');
  };

  return (
    <header className="header">
      <h1>{Props.title}</h1>
      <Button _text="Hello" _backgroundColor="green" _onClick={Props.onCB} />
      <Button _text="Hello1" _onClick={Props.onCB} />
      <Button _text="Hello2" _backgroundColor="green" _onClick={Props.onCB} />
      <Button _text="Hello3" _backgroundColor="green" _onClick={Props.onCB} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Fuck you',
  onCB: () => {
    console.log('defaultProps func');
  },
};
Header.prototype = {
  title: PropTypes.string.isRequired,
  onCB: PropTypes.func,
};

const headingStyle = { color: 'yellow', backgroundColor: 'red' };

export default Header;
