import { useState, useEffect } from 'react';

// css
import styled from 'styled-components';
import * as pallette from '../../styled/ThemeVariables.js';

// components
import { Form } from './components/Form';
import { Totals } from './components/Totals';

export const Auto = () => {

  const [price, setPrice] = useState(30000);
  const [down, setDown] = useState(2000);
  const [loan, setLoan] = useState(60);
  const [rate, setRate] = useState(5);
  const [payment, setPayment] = useState(0);
  const [trade, setTrade] = useState(0);
  const [ interest, setInterest ] = useState(0);

  useEffect(() => {
    const handlePayment = () => {
      let m;
      let p = price - down - trade;
      let i = rate / 100 / 12;
      let n = Number(loan);
      m = monthlyPayment(p, n, i);

      function monthlyPayment(p, n, i) {
          return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      }
      setInterest((payment * loan - p).toFixed(2))
      setPayment(Number(m.toFixed(2)));
    };
    handlePayment();
  }, [price, down, rate, loan, trade, payment])

  return (
    <StyledAuto>
      <h1>Auto Loan Calculator</h1>
      <div className="calc-wrapper">
        <Form
          price={price}
          setPrice={setPrice}
          down={down}
          setDown={setDown}
          loan={loan}
          setLoan={setLoan}
          trade={trade}
          setTrade={setTrade}
          rate={rate}
          setRate={setRate}      
        />
        <Totals
          payment={payment}
          loan={loan}
          interest={interest}
        />
      </div>
    </StyledAuto>
  )
}

const StyledAuto = styled.section`
display: flex;
flex-direction: column;
 h1 {
   font-size: ${pallette.title};
    color: white;
    margin: 20px auto 50px auto;
    @media (max-width: 1150px){
      font-size: 35px;
    }
    @media (max-width: 660px){
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .calc-wrapper {
    display: flex;
    @media (max-width: 660px){
      flex-direction: column;
    }
  }
`
