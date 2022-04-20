import { useState, useEffect } from 'react';

// components
import { Totals } from './components/Totals';
import { Form } from '../Mortgage/components/Form';

// css
import styled from 'styled-components';
import * as pallette from '../../styled/ThemeVariables.js';

export const Mortgage = () => {

  const [ price, setPrice ] = useState(300000);
  const [ down, setDown ] = useState(60000);
  const [ loan, setLoan ] = useState(30);
  const [ rate, setRate ] = useState(4.863);
  const [ tax, setTax ] = useState(3000);
  const [ insurance, setInsurance ] = useState(1200);
  const [ hoa, setHoa ] = useState(0);
  const [ pmi, setPmi ] = useState(0);
  const [ mortgage, setMortgage ] = useState(0);
  const [ interest, setInterest ] = useState(0);
  const [ includePmi, setIncludePmi ] = useState(false);
  const [ includeTaxes, setIncludeTaxes ] = useState(true);

  useEffect(() => {
    const handleMortgage = () => {
      let m;
      let p = price - down; 
      let i = rate / 100 / 12;
      let n = Number(loan) * 12; 
      m = monthlyPayment(p, n, i);

      function monthlyPayment(p, n, i) {
        return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
      }
      let adds = tax / 12 + insurance / 12 + hoa;
      setInterest((m * (loan * 12) - p).toFixed(0))
      setMortgage(Number(m.toFixed(0)) + adds);
      setPmi(Number(p * .001))
    };
    handleMortgage();
  }, [price, down, rate, loan, hoa, insurance, tax])

console.log(pmi)

  return (
    <StyledMortgage>
      <h1>Mortgage Calculator</h1>
      <div className="calc-wrapper">
        <Form
          mortgage={mortgage}
          setMortgage={setMortgage}
          tax={tax}
          setTax={setTax}
          insurance={insurance}
          setInsurance={setInsurance}
          pmi={pmi}
          hoa={hoa}
          setHoa={setHoa}
          down={down}
          setDown={setDown}
          price={price}
          setPrice={setPrice}
          loan={loan}
          setLoan={setLoan}
          rate={rate}
          setRate={setRate}
          setIncludeTaxes={setIncludeTaxes}
          setIncludePmi={setIncludePmi}
        />
        <Totals
          mortgage={mortgage}
          tax={tax}
          insurance={insurance}
          pmi={pmi}
          hoa={hoa}
          down={down}
          loan={loan}
          price={price}
          interest={interest}
          includePmi={includePmi}
          includeTaxes={includeTaxes}
        />
      </div>
    </StyledMortgage>
  )
}

const StyledMortgage = styled.section`
display: flex;
flex-direction: column;
   h1 {
    font-size: ${pallette.title};
    color: white;
    margin: 20px auto 50px auto;
    @media (max-width: 1150px){
      font-size: 35px;
    }
    @media (max-width: 960px){
      font-size: 24px;
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .calc-wrapper {
    display: flex;
    @media (max-width: 960px){
      flex-direction: column;
    }
  }
`;
