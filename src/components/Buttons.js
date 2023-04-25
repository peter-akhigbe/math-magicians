import './Buttons.css';

const button = () => (
  <div className="btns">
    <div className="grey-btns">
      <div>
        <button type="button">AC</button>
        <button type="button">+/-</button>
        <button type="button">%</button>
      </div>
      <div>
        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>
      </div>
      <div>
        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>
      </div>
      <div>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
      </div>
      <div>
        <button className="zero" type="button">
          0
        </button>
        <button type="button">.</button>
      </div>
    </div>
    <div className="orange-btns">
      <button type="button">÷</button>
      <button type="button">x</button>
      <button type="button">-</button>
      <button type="button">+</button>
      <button type="button">=</button>
    </div>
  </div>
);

export default button;