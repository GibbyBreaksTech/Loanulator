// css
import styled from 'styled-components';

export const Form = ({
    price,
    setPrice,
    down, 
    setDown, 
    loan, 
    setLoan, 
    rate, 
    setRate, 
    tax, 
    setTax, 
    insurance, 
    setInsurance, 
    hoa, 
    setHoa, 
    pmi, 
    mortgage, 
    setMortgage,
    setIncludePmi,
    setIncludeTaxes
}) => {

  const handleDisplay = () => {
    let checkbox = document.getElementById("includeTaxes");
    let additions = document.getElementById("additions")
    if(checkbox.checked === true){
      additions.style.display = "block"
    } else {
      additions.style.display = "none"
    }
  }

  const handleAdds = () => {
    let adds = tax / 12 + insurance / 12 + hoa;
    let checkbox = document.getElementById("includeTaxes");
    console.log(adds)
    if(checkbox.checked === true){
      setMortgage(Number(mortgage.toFixed(0)) + adds);
      setIncludeTaxes(true);
    } else {
      setMortgage(Number(mortgage.toFixed(0)) - adds);
      setIncludeTaxes(false);
    }
  }

  const handlePMI = () => {
    let checkbox = document.getElementById("pmi");
    if(checkbox.checked === true){
      setIncludePmi(true)
    } else {
      setIncludePmi(false)
    }
  }

  return (
    <StyledForm>
      <div className="tab-container">
        <div className="label-wrapper">
          <label>Home Price</label>
          <div className="input-container">
            <div className="label-helper">$</div>
            <input type="text" defaultValue={price} onChange={(e) => { setPrice(e.target.value)}}/>
          </div>
        </div>
        <div className="label-wrapper">
          <label>Down Payment</label>
          <div className="input-container">
            <div className="label-helper">$</div>
            <input type="text" defaultValue={down} onChange={(e) => { setDown(e.target.value)}}/>
            <input type="number" className='percent' defaultValue={down / price * 100} onChange={(e) => { setDown(price * (e.target.valueAsNumber / 100) )}}/>
            <div className="label-helper">%</div>
          </div>
        </div>
        <div className="label-wrapper">
          <label>Loan Program</label>
          <div className="input-container">
            <select onChange={(e) => { setLoan(Number(e.target.value))}}>
              <option value={30}>30 Year Fixed</option>
              <option value={20}>20 Year Fixed</option>
              <option value={15}>15 Year Fixed</option>
            </select>
          </div>
        </div>
        <div className="label-wrapper">
          <label>Interest Rate</label>
          <div className="input-container">
            <input type="number" defaultValue={rate} onChange={(e) => { setRate(Number(e.target.valueAsNumber))}}/>
            <div className="label-helper">%</div>
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="pmi" onChange={(e) => { handlePMI()}}/>
          <p>Include Mortgage Insurance</p>
          <div className="tooltip">
            <h2>?</h2>
            <p>Mortgage insurance is required primarily for borrowers on a conventional loan with a down payment of less than <strong>20%</strong> of the home's purchase price. It protects lenders against some or most of the losses that can occur when a borrower defaults on a mortgage loan. Contact your lender for more details.</p>
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="includeTaxes" defaultChecked onChange={() => { handleAdds(); handleDisplay(); }}/>
          <p>Include taxes / insurance</p>
        </div>
        <div className="additions-container" id="additions">
          <div className="label-wrapper">
            <label>Property Tax</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={tax} key={tax} onChange={(e) => { setTax(e.target.valueAsNumber)}}/>
              <input type="number" className='percent' defaultValue={tax / price * 100} onChange={(e) => { setTax(price * (e.target.valueAsNumber / 100) )}}/>
              <div className="label-helper">%</div>
            </div>
          </div>
          <div className="label-wrapper">
            <label>Home Insurance</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="number" defaultValue={insurance} onChange={(e) => setInsurance(e.target.valueAsNumber)}/>
            </div>
          </div>
          <div className="label-wrapper">
            <label>HOA Dues</label>
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="number" defaultValue={hoa} onChange={(e) => setHoa(e.target.valueAsNumber)} />
              <div className="label-helper">/month</div>
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
      width: 50px;
      border-left: 2px solid #000000;
      padding-left: 6px;
    }
    select {
    background: #bbbbbb;
    border: none;
    font-size: 18px;
    width: 100%;
    margin: 10px;
    }
    option {
      margin-left: 10px;
      font-size: 16px;
    }
  }
    .checkbox-container {
      display: flex;
      align-items: center;
      font-size: 20px;
      margin: 20px auto;
      width: 80%;
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