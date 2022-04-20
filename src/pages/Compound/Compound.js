import { useState, useEffect } from 'react';

// css
import styled from 'styled-components';
import * as pallette from '../../styled/ThemeVariables.js';

// components
import { Form } from './components/Form';
import { Totals } from './components/Totals';

export const Compound = () => {

  const [ principal, setPrincipal]  = useState(10000);
  const [ rate, setRate ] = useState(5);
  const [ time, setTime ] = useState(20)
  const [ compound, setCompound ] = useState(1);
  const [ interest, setInterest ] = useState(0);

  useEffect(() => {
    const handleInterest = () => {
      const compoundInterest = (p, t, r, n) => {
        const amount = p * (Math.pow((1 + ((r / 100) / n)), (n * t)));
        const i = amount - p;
        return i;
      };
      setInterest((compoundInterest(principal, time, rate, compound)))
    };
    handleInterest();
  }, [principal, time, rate, compound])

  return (
    <StyledAuto>
      <h1>Compound Interest Calculator</h1>
      <div className="calc-wrapper">
        <Form
          principal={principal}
          setPrincipal={setPrincipal}
          time={time}
          setTime={setTime}
          compound={compound}
          setCompound={setCompound}
          rate={rate}
          setRate={setRate}      
        />
        <Totals
          principal={principal}
          time={time}
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
