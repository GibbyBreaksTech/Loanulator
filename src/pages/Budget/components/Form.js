import { useState, useEffect } from 'react';
// css
import styled from 'styled-components';

export const Form = ({setTotal}) => {

  const [ income, setIncome ] = useState(0);

  useEffect(() => {
    const loadValues = () => {
      let x = document.getElementsByClassName("inputs");
      let sum = 0;
      for ( let i = 0; i < x.length; i++){
        sum += parseInt(x[i].value);
      }
      setTotal(income - sum);
    }
    loadValues();
  }, [income, setTotal])

  const handleValues = () => {
    let x = document.getElementsByClassName("inputs");
    let sum = 0;
    for ( let i = 0; i < x.length; i++){
      sum += Number(x[i].value);
      console.log(x[i].value)
    }
    setTotal(income - sum);
  }

  const addFields = () => {
    let div = document.getElementById("tab-wrapper")
    let x = document.createElement("div");
    x.classList.add("label-wrapper");
    x.innerHTML = `
      <label><input type="text" /></label>
      <div class="input-container">
        <div class="label-helper">$</div>
        <input class="inputs" type="text" value="0" />
      </div>
    `
    div.appendChild(x);
  }

  return (
    <StyledForm>
      <div className="tab-wrapper" id="tab-wrapper">
        <div className="label-wrapper">
          <label>Monthly Income</label>
          <div className="input-container">
            <div className="label-helper">$</div>
            <input type="text" defaultValue={income} onChange={(e) => { setIncome(e.target.value)}}/>
          </div>
        </div>
        <div className="label-wrapper">
          <label><input type="text" /></label>
          <div className="input-container">
            <div className="label-helper">$</div>
            <input className="inputs" type="text" defaultValue={0} />
          </div>
        </div>
        <div className="label-wrapper">
          <label><input type="text" /></label>
          <div className="input-container">
            <div className="label-helper">$</div>
            <input type="text" className="inputs" defaultValue={0} />
          </div>
        </div>
        <div className="label-wrapper">
          <label><input type="text" /></label>
          <div className="input-container">
            <div className="label-helper">$</div>
            <input type="text" className="inputs" defaultValue={0} />
          </div>
        </div>
        <div className="label-wrapper">
          <label><input type="text" /></label>
          <div className="input-container">
            <div className="label-helper">$</div>
            <input type="text" className="inputs" defaultValue={0} />
          </div>
        </div>
      </div>
      <div className="buttons-container">
        <button onClick={() => { addFields() }}>Add Fields</button>
        <button id="calculate" onClick={() => { handleValues() }}>Calculate</button>
      </div>
    </StyledForm>
  )
}

const StyledForm = styled.section`
background: #6d6d6d56;
width: 500px;
max-width: 600px;
padding: 10px 0;
border-radius: 8px;
  @media (max-width: 960px){
    width: 80%;
    margin: auto;
  }
  @media (max-width: 460px){
    width: 95%;
    margin: auto;
  }
  .label-wrapper {
    margin: 20px auto;
    width: 80%;
    background: #03d3563b;
    border-radius: 8px;
    display: flex;
    align-items: center;
    @media (max-width: 660px){
      width: 95%;
    }
    label {
      font-size: 20px;
      color: rgb(231, 230, 230);
      margin-left: 10px;
      width: 50%;
      height: 100%;
      input{
        border: none;
        background: none;
        outline: none;
        font-size: 20px;
        color: rgb(231, 230, 230);
        width: 100%;
        height: 100%;
      }
    }
    .input-container {
      display: flex;
      background: none;
      width: 50%;
      border-radius: 6px;
      align-items: center;
      margin-left: 10px;
      border: 1px solid #bbbbbb54;
      &:hover {
        border: 1px solid #bbbbbb;
      }
      .label-helper {
        font-size: 16px;
        color: #dbdbdb;
        &:first-child {
          margin-left: 6px;
        }
      }
      input {
        border: none;
        background: none;
        outline: none;
        margin: 10px 6px;
        font-size: 20px;
        width: 75%;
        color: rgb(231, 230, 230);
      }
    }
  }
  .buttons-container {
    margin: 20px auto;
    width: 80%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 660px){
      width: 95%;
    }
    button {
      border: none;
      width: 40%;
      height: 40px;
      border-radius: 6px;
      font-size: 18px;
      letter-spacing: .5px;
      font-weight: 700;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        background-color: #4CAF50;
        color: white;
      }
    }
    #calculate {
      background: black;
      color: white;
      &:hover {
        background-color: #4CAF50;
        color: white;
      }
    }
  }
`;