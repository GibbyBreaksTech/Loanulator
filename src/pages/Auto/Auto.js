import { useState, useEffect } from 'react';

// css
import './style.css';

export const Auto = () => {

  const [ price, setPrice ] = useState(30000);
  const [ down, setDown ] = useState(2000);
  const [ loan, setLoan ] = useState(60);
  const [ rate, setRate ] = useState(5);
  const [ payment, setPayment ] = useState(0)
  const [ trade, setTrade ] = useState(0)

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
      setPayment(Number(m.toFixed(2)));
    };
    handlePayment();
  }, [price, down, rate, loan, trade ])

  return (
    <div className="tab-wrapper">
      <div className="tab-container">
        <div className="label-wrapper">
          <label>Vehicle Price
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
            </div>
          </label>
        </div>
        <div className="label-wrapper">
          <label>Trade-In Value
            <div className="input-container">
              <div className="label-helper">$</div>
              <input type="text" defaultValue={trade.toLocaleString()} onChange={(e) => { setTrade(e.target.value)}}/>
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
        <div className="additions-container" id="additions">
          <div className="label-wrapper">
            <label>Loan Length (Months)
              <div className="input-container">
                <input type="text" defaultValue={loan} onChange={(e) => { setLoan(e.target.value)}}/>
                <div className="label-helper">months</div>
              </div>
            </label>
          </div>
        </div>
      </div>
      <div className="total-container">
        <h2>${payment} /month for {loan} months</h2>
      </div>
    </div>
  )
}

