// css
import styled from 'styled-components';

export const Totals = ({ payment, interest, loan }) => {

  return (
    <StyledTotals>
      <div className="monthly-container">
        <h2>Monthly Payment</h2>
        <h3><span className="dollar-sign">$</span>{payment}<span id="month"> / month </span><span id="years">for { loan / 12 } years</span></h3>
      </div>
      <div className="interest-container">
        <h4>Total Interest</h4>
        <h3><span className="dollar-sign">$</span>{(Number(interest).toFixed(0)).toLocaleString()}</h3>
      </div>
      <div className="total-paid-container">
        <h4 id="paid-title">Total Paid</h4>
        <h3><span className="dollar-sign">$</span>{ Number((payment * loan).toFixed(0)).toLocaleString()}</h3>
      </div>
    </StyledTotals>
  )
}

const StyledTotals = styled.div`
width: 35%;
margin: 0 auto;
display: flex;
flex-direction: column;
  h2 {
    color: #a3a3a3;
    font-size: 30px;
    border-bottom: 1px solid #a3a3a3;
  }
  h3 {
    color: #03d356;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    font-size: 30px;
    span {
      color: #d4d4d4;
      font-weight: 400;
      font-size: 20px;
    }
  }
  .monthly-container {
    h2 {
      display: block;
      color: #ffffff;
      font-size: 30px;
    }
    h3, h4 {
      display: block;
      color: #03d356;
      font-size: 30px;
      margin: 6px 0 0 0;
      span {
        color: #dadada;
        font-size: 30px;
        font-weight: 400;
      }
    }
    h4 {
      font-size: 20px;
      margin-top: 0;
      span {
        font-size: 16px;
      }
    }
  }
  #month {
    font-size: 16px;
  }
  #years {
    font-size: 14px;
    font-style: italic;
  }
  .interest-container {
    h3 {
      margin: 0;
      display: flex;
      flex-direction: row;
      align-items: baseline;
    }
    h4 {
      color: #dadada;
      font-size: 20px;
      font-weight: 400;
      margin-top: 20px;
    }
  }
  .total-paid-container {
    h3 {
      margin: 0;
      display: flex;
      flex-direction: row;
      align-items: baseline;
    }
    h4 {
      color: #dadada;
      font-size: 20px;
      font-weight: 400;
      &:first-child {
        margin-top: 20px;
      }
    }
  }
`;
