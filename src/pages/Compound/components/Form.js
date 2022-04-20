// css
import styled from "styled-components";

export const Form = ({
  principal, 
  setPrincipal,
  rate, 
  setRate,
  compound,
  setCompound,
  time, 
  setTime
}) => {

  return (
    <StyledForm>
      <div className="label-wrapper">
        <label>Principal</label>
        <div className="input-container">
          <div className="label-helper">$</div>
          <input
            type="text"
            defaultValue={principal}
            onChange={(e) => {
              setPrincipal(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="label-wrapper">
        <label>Annual Rate</label>
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
      <div className="label-wrapper">
        <label>Compound</label>
        <div className="input-container">
          <select
          type="number"
            defaultValue={compound}
            onChange={(e) => {
              setCompound(Number(e.target.value))
            }}
          >
           <option value={1}>Annually</option>
           <option value={2}>Semi-Annually</option>  
           <option value={4}>Quarterly</option> 
           <option value={6}>Bi-Monthly</option> 
           <option value={12}>Monthly</option> 
          </select>
        </div>
      </div>
      <div className="additions-container" id="additions">
        <div className="label-wrapper">
          <label>Time <span>(years)</span></label>
          <div className="input-container">
            <input
              type="text"
              defaultValue={time}
              onChange={(e) => {
                setTime(e.target.value)
              }}
            />
          </div>
        </div>
      </div>
    </StyledForm>
  )
}

const StyledForm = styled.form`
background: #6d6d6d56;
width: 50%;
max-width: 400px;
padding: 10px 0;
border-radius: 8px;
  @media (max-width: 660px){
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
    label {
      font-size: 20px;
      color: rgb(231, 230, 230);
      margin-left: 10px;
      width: 50%;
      @media (max-width: 750px){
        font-size: 18px;
      }
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
      &:hover {
        border: 1px solid #bbbbbb;
      }
      .label-helper {
        font-size: 16px;
        margin-left: 6px;
        color: #dbdbdb;
      }
      input, select {
        border: none;
        background: none;
        outline: none;
        margin: 10px 6px;
        font-size: 20px;
        width: 75%;
        color: rgb(231, 230, 230);
      }
      select {
        width: 100%;
        cursor: pointer;
      }
      option { 
        color: black;
        cursor: pointer;
      }
    }
  }
`;