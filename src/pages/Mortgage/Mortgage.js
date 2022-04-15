import { useState, useEffect } from 'react';

// components
import { Total } from './components/Total';

// css
import './style.css';

export const Mortgage = () => {

  const [ price, setPrice ] = useState(300000);
  const [ down, setDown ] = useState(60000);
  const [ loan, setLoan ] = useState(30);
  const [ rate, setRate ] = useState(4.863);
  const [ tax, setTax ] = useState(3000);
  const [ insurance, setInsurance ] = useState(1200);
  const [ hoa, setHoa ] = useState(0);
  const [ pmi,  ] = useState(1);
  const [ mortgage, setMortgage ] = useState(0)

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
      setMortgage(Number(m.toFixed(0)) + adds);
    };
    handleMortgage();
  }, [price, down, rate, loan, hoa, insurance, tax])

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
    } else {
      setMortgage(Number(mortgage.toFixed(0)) - adds);
    }
  }

  const handlePMI = () => {
    let x = price * (pmi / 100 ) / 12;
    let checkbox = document.getElementById("pmi");
    if(checkbox.checked === true){
      setMortgage(Number(mortgage.toFixed(0)) + x);
    } else {
      setMortgage(Number(mortgage.toFixed(0)) - x);
    }
  }

  return (
    <div className="mortgage-wrapper">
      <div className="tab-container">
        <h1>Mortgage Calculator</h1>
        <div className="label-wrapper">
          <label>Home Price
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={price.toLocaleString()} onChange={(e) => { setPrice(e.target.value)}}/>
            </div>
          </label>
        </div>
        <div className="label-wrapper">
          <label>Down Payment
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={down.toLocaleString()} onChange={(e) => { setDown(e.target.value)}}/>
              <input type="number" defaultValue={down / price * 100} onChange={(e) => { setDown(price * (e.target.valueAsNumber / 100) )}}/>
              <div className="label-helper">%</div>
            </div>
          </label>
        </div>
        <div className="label-wrapper">
          <label>Loan Program
            <div className="input-container">
              <select onChange={(e) => { setLoan(Number(e.target.value))}}>
                <option value={30}>30 Year Fixed</option>
                <option value={15}>15 Year Fixed</option>
                <option value="15">idk what this is</option>
              </select>
            </div>
          </label>
        </div>
        <div className="label-wrapper">
          <label>Interest Rate
            <div className="input-container">
              <input type="number" defaultValue={rate} onChange={(e) => { setRate(Number(e.target.valueAsNumber))}}/>
              <div className="label-helper">%</div>
            </div>
          </label>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="pmi" onChange={(e) => { handlePMI()}}/>
          <p>Include Mortgage Insurance</p>
          <div className="tooltip">
            <h2>?</h2>
            <p>Mortgage insurance is required primarily for borrowers on a conventional loan with a down payment of less than 20% of the home's purchase price. It protects lenders against some or most of the losses that can occur when a borrower defaults on a mortgage loan. Contact your lender for more details.</p>
          </div>
        </div>
        <div className="checkbox-container">
          <input type="checkbox" id="includeTaxes" defaultChecked onChange={() => { handleAdds(); handleDisplay(); }}/>
          <p>Include taxes / insurance</p>
        </div>
        <div className="additions-container" id="additions">
          <div className="label-wrapper">
            <label>Property Tax
              <div className="input-container">
                <div className="label-helper">$</div>
                <input type="text" defaultValue={tax.toLocaleString()} key={tax} onChange={(e) => { setTax(e.target.valueAsNumber)}}/>
                <div className="label-helper">/year</div>
                <input type="number" defaultValue={tax / price * 100} onChange={(e) => { setTax(price * (e.target.valueAsNumber / 100) )}}/>
                <div className="label-helper">%</div>
              </div>
            </label>
          </div>
          <div className="label-wrapper">
            <label>Home Insurance
              <div className="input-container">
                <div className="label-helper">$</div>
                <input type="number" defaultValue={insurance} onChange={(e) => setInsurance(e.target.valueAsNumber)}/>
                <div className="label-helper">/year</div>
              </div>
            </label>
          </div>
          <div className="label-wrapper">
            <label>HOA Dues
              <div className="input-container">
                <div className="label-helper">$</div>
                <input type="number" defaultValue={hoa} onChange={(e) => setHoa(e.target.valueAsNumber)} />
                <div className="label-helper">/month</div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <Total
        mortgage={mortgage}
        tax={tax}
        insurance={insurance}
        pmi={pmi}
        hoa={hoa}
        down={down}
        price={price}
      />
    </div>
  )
}
