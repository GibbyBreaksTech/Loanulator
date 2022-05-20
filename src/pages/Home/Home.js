// css
import styled from "styled-components";
import * as pallette from '../../styled/ThemeVariables.js';

// router
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <StyledHome>
      <div className="links">
        <h4>Financial Calculators</h4>
        <Link to="/budget">Simple Budget Calculator</Link>
        <Link to="/mortgage">Mortgage Calculator</Link>
        <Link to="/auto">Auto Loan Calculator</Link>
        <Link to="/compound">Compound Interest Calculator</Link>
      </div>
    </StyledHome>
  )
}

const StyledHome = styled.section`
min-height: 80vh;
  .links {
    display: flex;
    flex-direction: column;
    h4 {
      margin: 10px 0;
      font-size: 40px;
      color: ${pallette.accentColor};
      @media(max-width: 550px){
        font-size: ${pallette.subtitle};
      }
    }
    a {
      margin: 10px 0;
      font-size: ${pallette.subtitle};
      color: white;
      @media(max-width: 550px){
        font-size: 20px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;