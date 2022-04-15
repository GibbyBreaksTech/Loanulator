import { useState, useEffect } from 'react';

// css
import './style.css';

export const Totals = ({ payment, interest, loan }) => {

  const [ calcInterest, setCalcInterest ] = useState(0)

  useEffect(() => {
    setCalcInterest((payment * 60 + Number(interest)).toFixed(0))
  }, [payment, interest])
  
  return (
    <div className="auto-total-container">
      <div className="monthly-container">
        <h2>Monthly Payment</h2>
        <h3>${payment}<span id="month"> / month </span><span id="years">for {loan / 12} years</span></h3>
      </div>
      <h3><span id="interest-title">Total Interest</span> ${Number(interest).toFixed(0)}</h3>
      <h3><span id="paid-title">Total Paid</span> ${ Number(calcInterest).toLocaleString()}</h3>
    </div>
  )
}
