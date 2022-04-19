// css
import './style.css';

// react-router
import { Link } from 'react-router-dom';

// images
import Icon from '../../assests/calculator03d356.png';

export const Nav = () => {
  return (
    <nav>
      <div className="logo-container">
        <img src={Icon} alt="" />
        <h1 id="logo">Loanulator</h1>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <div className="dropdown">
          <button className='dropbtn'>Calculators</button>
          <div className="dropdown-content">
            <Link to="/mortgage">Mortgage Calc</Link>
            <Link to="/auto">Auto Calc</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
