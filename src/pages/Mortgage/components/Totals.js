// css
import styled from 'styled-components';
import * as pallette from '../../../styled/ThemeVariables.js';

export const Totals = ({ mortgage, interest, loan, pmi, includeTaxes, includePmi }) => {

  return (
    <StyledTotals>
      <div className="monthly-container">
        <h2>Monthly Payment</h2>
        {
          includePmi === true ? (
            <>
              <h3><span className="dollar-sign">$</span>{mortgage + pmi}<span id="month"> / month </span><span id="years">for {loan} years</span></h3>
              <h4><span className="dollar-sign">$</span>{pmi}<span> for mortgage insurance</span></h4>
            </>
          ): (
            <h3><span className="dollar-sign">$</span>{mortgage}<span id="month"> / month </span><span id="years">for {loan} years</span></h3>
          )
        }
      </div>
      <div className="interest-container">
        <h4>Total Interest</h4>
        <h3><span className="dollar-sign">$</span>{Number(interest).toLocaleString()}</h3>
      </div>
      <div className="total-paid-container">
        <h4 id="paid-title">Total Paid</h4>
        <h3><span className="dollar-sign">$</span>{ Number((mortgage * (loan * 12)).toFixed(0)).toLocaleString()}
          {
            includeTaxes === true ? (
              <span id="taxes"> with taxes / insurance</span>
            ): (
              <></>
            )
          }
        </h3>

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
    color: #a3a3a3;
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
      color: ${pallette.accentColor};
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
      display: block;
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
      display: block;
    }
    h4 {
      color: #dadada;
      font-size: 20px;
      font-weight: 400;
      &:first-child {
        margin-top: 20px;
      }
    }
    #taxes {
      font-style: italic;
      font-size: 14px;
      margin-left: 10px;
    }
  }
`;

