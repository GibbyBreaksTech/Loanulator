// css
import styled from 'styled-components';
import * as pallette from '../../../styled/ThemeVariables.js';

export const Totals = ({ total }) => {

  return (
    <StyledTotals>
      <div className="monthly-container">
        <h2>Budget Remaining</h2>
        <h3><span>$</span>{total}</h3>
      </div>
    </StyledTotals>
  )
}

const StyledTotals = styled.div`
width: 35%;
margin: 0 auto;
display: flex;
flex-direction: column;
  @media (max-width: 960px){
    width: 80%;
    text-align: center;
  }
  h2 {
    color: #d8d8d8;
    font-size: 30px;
    border-bottom: 1px solid #a3a3a3;
    @media (max-width: 1150px){
      font-size: 24px;
    }
    @media (max-width: 960px){
      margin-top: 30px;
    }
  }
  h3 {
    color: ${pallette.accentColor};
    display: flex;
    align-items: center;
    margin: 10px 0;
    font-size: 30px;
    span {
      color: #d4d4d4;
      font-weight: 400;
      font-size: 20px;
    }
  }
`;

