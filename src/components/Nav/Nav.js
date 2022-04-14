import './style.css';

// react-router
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <h1 id="logo">Loanulator</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/mortgage">Mortgage Calc</Link>
        <Link to="/auto">Auto Calc</Link>
      </div>
    </nav>
  )
}
