import { useState, useEffect } from 'react';

// css
import styled from 'styled-components';

// components
import { Form } from './components/Form/Form';
import { Totals } from './components/Totals/Totals';

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
background: black;
 h1 {
    color: white;
    margin: 20px auto;
  }
  .calc-wrapper {
    display: flex;
  }
`
