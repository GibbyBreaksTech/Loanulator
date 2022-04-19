// css
import styled from "styled-components";

export const Form = ({
  price, 
  setPrice, 
  loan, 
  setLoan, 
  rate, 
  setRate, 
  down, 
  setDown, 
  trade, 
  setTrade
}) => {

  return (
    <StyledForm>
      <div className="label-wrapper">
        <label>Price</label>
        <div className="input-container">
          <div className="label-helper">$</div>
          <input
            type="text"
            defaultValue={price}
            onChange={(e) => {
              setPrice(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="label-wrapper">
        <label>Down Payment</label>
        <div className="input-container">
          <div className="label-helper">$</div>
          <input
            type="text"
            defaultValue={down}
            onChange={(e) => {
              setDown(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="label-wrapper">
        <label>Trade-In Value</label>
        <div className="input-container">
          <div className="label-helper">$</div>
          <input
            type="text"
            defaultValue={trade}
            onChange={(e) => {
              setTrade(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="label-wrapper">
        <label>Interest Rate</label>
        <div className="input-container">
          <input
            type="number"
            defaultValue={rate}
            onChange={(e) => {
              setRate(Number(e.target.valueAsNumber))
            }}
          />
          <span className="label-helper">%</span>
        </div>
      </div>
      <div className="additions-container" id="additions">
        <div className="label-wrapper">
          <label>Loan Length</label>
          <div className="input-container">
            <input
              type="text"
              defaultValue={loan}
              onChange={(e) => {
                setLoan(e.target.value)
              }}
            />
            <div className="label-helper">/months</div>
          </div>
        </div>
      </div>
    </StyledForm>
  )
}

const StyledForm = styled.form`
background: #6d6d6d56;
width: 400px;
max-width: 400px;
padding: 10px 0;
border-radius: 8px;
  .label-wrapper {
    margin: 20px auto;
    width: 80%;
    background: #03d3563b;
    border-radius: 8px;
    display: flex;
    align-items: center;
    label {
      font-size: 20px;
      color: rgb(231, 230, 230);
      margin-left: 10px;
      width: 50%;
      span {
        font-size: 16px;
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
    }
    .label-helper {
      font-size: 16px;
      margin-left: 6px;
      color: #dbdbdb;
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
`;