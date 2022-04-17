import { useState, useEffect } from 'react';

// css
import styled from 'styled-components';

export const Totals = ({ payment, interest, loan }) => {

  const [ calcInterest, setCalcInterest ] = useState(0)

  useEffect(() => {
    setCalcInterest((payment * 60 + Number(interest)).toFixed(0))
  }, [payment, interest])
  
  return (
    <StyledTotals>
      <div className="monthly-container">
        <h2>Monthly Payment</h2>
        <h3>${payment}<span id="month"> / month </span><span id="years">for {loan / 12} years</span></h3>
      </div>
      <h3><span id="interest-title">Total Interest</span> ${Number(interest).toFixed(0)}</h3>
      <h3><span id="paid-title">Total Paid</span> ${ Number(calcInterest).toLocaleString()}</h3>
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
  }
  h3 {
    color: #03d356;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    font-size: 30px;
  }
  h3 span {
    color: #d4d4d4;
    font-weight: 400;
    font-size: 20px;
  }
  .monthly-container {
    h2 {
      display: block;
      color: #ffffff;
      font-size: 30px;
    }
    h3 {
      display: block;
      color: #03d356;
      font-size: 24px;
    }
    h3 span {
      color: #dadada;
      font-size: 30px;
      font-weight: 400;
    }
  }
  #month {
    font-size: 16px;
  }
  #years {
    font-size: 14px;
    font-style: italic;
  }
`;