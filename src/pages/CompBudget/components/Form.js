// css
import styled from 'styled-components';

export const Form = ({setIncome}) => {



  return (
    <StyledForm>
      <div className="tab-wrapper">
        <div className="tab-container">
          <h2>Monthly Income</h2>
          <div className="label-wrapper">
            <label>Salary / Earned Income</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Pension / Social Secruity</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Investments / Savings</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Other</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
        <h2>Expenses</h2>
        <div className="tab-container">
          <h2>Housing / Utilities</h2>
          <div className="label-wrapper">
            <label>Mortgage / Rent</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Property Tax</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Insurance</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>HOA Fee</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Home Repair</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Utilities</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <h2>Transportation</h2>
          <div className="label-wrapper">
            <label>Aut Loan / Lease</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Auto Insurance</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Gasoline</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Maintence</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Parking / Tolls</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Other</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <h2>Other Debts / Loans</h2>
          <div className="label-wrapper">
            <label>Credit Cards</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Student Loans</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Other</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <h2>Living Expenses</h2>
          <div className="label-wrapper">
            <label>Groceries</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Clothing</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Household Items</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Dining Out</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Other</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <h2>Healthcare</h2>
          <div className="label-wrapper">
            <label>Medical Insurance</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Medical Bills</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Dental Insurance</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <h2>Children / Education</h2>
          <div className="label-wrapper">
            <label>Childcare</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Tuition</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Education Supplies</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Child Support</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Other</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <h2>Savings / Investments</h2>
          <div className="label-wrapper">
            <label>401k / IRA</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>College Savings</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Investments</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Emergency Fund</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Other</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
        <div className="tab-container">
          <h2>Miscellaneous Expenses</h2>
          <div className="label-wrapper">
            <label>Pet</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Pet Insurance</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Hobbies / Sports</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Entertainment</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Travel</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Other</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={0} onChange={(e) => { setIncome(e.target.value)}}/>
            </div>
          </div>
        </div>
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
    .percent {
      width: 40px;
      text-align: right;
      margin: 10px 4px;
    }
    select {
      border: none;
      font-size: 18px;
      width: 100%;
      margin: 10px;
      background: none;
      color: white;
      option {
        color: #000000;
        margin-left: 10px;
        font-size: 16px;
        background: none;
      }
    }
  }
    .checkbox-container {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin: 20px auto;
      width: 80%;
      @media (max-width: 660px){
        width: 95%;
      }
      input {
        margin-right: 10px;
      }
      p {
        color: white;
        font-size: 16px;
      }
      .tooltip {
        margin-left: 10px;
        display: flex;
        text-align: center;
        position: relative;
        h2 {
          font-size: 24px;
          font-weight: 700;
          background: #bbbbbb;
          padding: 1px 2px;
          border-radius: 50%;
          height: 30px;
          width: 30px;
          cursor: pointer;
        }
      }
      .tooltip:hover {
        color: #000000;
      }
      .tooltip:hover h2 {
        color: #000000;
        background: rgb(156, 156, 156);
      }
      .tooltip:hover p {
        display: block;
      }
      .tooltip p {
        display: none;
        position: absolute;
        width: 400px;
        background: #bbbbbb;
        border: 1px solid black;
        left: 40px;
        border-radius: 8px;
        color: black;
      }
    }
    .additions-container {

    }
`;