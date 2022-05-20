import { useState } from 'react';

// components


// css
import styled from 'styled-components';
import * as pallette from '../../styled/ThemeVariables.js';

export const CompBudget = () => {

  return (
    <StyledBudget>
      
    </StyledBudget>
  )
}

const StyledBudget = styled.section`
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
