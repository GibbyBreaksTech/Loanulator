// css
import styled from 'styled-components';

export const Totals = ({ principal, interest }) => {

  return (
    <StyledTotals>
      <h2>Return on Investment</h2>
      <div className="principal-container">
        <h4>Principal</h4>
        <h3><span className="dollar-sign">$</span>{principal.toLocaleString()}</h3>
      </div>
      <div className="interest-container">
        <h4>Interest</h4>
        <h3><span className="dollar-sign">$</span>{Number((interest).toFixed(0)).toLocaleString()}</h3>
      </div>
      <div className="total-container">
        <h4 id="paid-title">Total</h4>
        <h3><span className="dollar-sign">$</span>{ Number((principal + interest).toFixed(0)).toLocaleString()}</h3>
      </div>
    </StyledTotals>
  )
}

const StyledTotals = styled.div`
width: 35%;
margin: 0 auto;
display: flex;
flex-direction: column;
  @media (max-width: 660px){
    width: 60%;
    text-align: center;
  }
  h2 {
    color: #ffffff;
    font-size: 30px;
    border-bottom: 1px solid #a3a3a3;
    @media (max-width: 1150px){
      font-size: 24px;
    }
    @media (max-width: 660px){
      margin-top: 30px;
    }
  }
  .interest-container, .principal-container, .total-container {
    h3 {
    color: #03d356;
    display: block;
    margin: 4px 0;
    font-size: 30px;
      span {
        color: #d4d4d4;
        font-weight: 400;
        font-size: 20px;
      }
    }
    h4 {
      color: #dadada;
      font-size: 20px;
      font-weight: 400;
      margin-top: 20px;
    }
  }
`;
