import './Buttons.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const Buttons = (props) => {
  const { clickHandler } = props;

  return (
    <div className="btns">
      <div className="grey-btns">
        <div>
          <button onClick={clickHandler} type="button">
            AC
          </button>
          <button onClick={clickHandler} type="button">+/-</button>
          <button onClick={clickHandler} type="button">%</button>
        </div>
        <div>
          <button onClick={clickHandler} type="button">7</button>
          <button onClick={clickHandler} type="button">8</button>
          <button onClick={clickHandler} type="button">9</button>
        </div>
        <div>
          <button onClick={clickHandler} type="button">4</button>
          <button onClick={clickHandler} type="button">5</button>
          <button onClick={clickHandler} type="button">6</button>
        </div>
        <div>
          <button onClick={clickHandler} type="button">1</button>
          <button onClick={clickHandler} type="button">2</button>
          <button onClick={clickHandler} type="button">3</button>
        </div>
        <div>
          <button onClick={clickHandler} className="zero" type="button">
            0
          </button>
          <button onClick={clickHandler} type="button">.</button>
        </div>
      </div>
      <div className="orange-btns">
        <button onClick={clickHandler} type="button">÷</button>
        <button onClick={clickHandler} type="button">x</button>
        <button onClick={clickHandler} type="button">-</button>
        <button onClick={clickHandler} type="button">+</button>
        <button onClick={clickHandler} type="button">=</button>
      </div>
    </div>
  );
};

Buttons.propTypes = {
  clickHandler: PropTypes.func,
};

Buttons.defaultProps = {
  clickHandler: () => {},
};

export default Buttons;
