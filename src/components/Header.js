import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <span>|</span>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <span>|</span>
        <li>
          <Link to="/quotes">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
