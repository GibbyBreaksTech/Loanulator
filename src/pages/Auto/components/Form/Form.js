// css
import './style.css';

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
    <form className="auto-calc-form">
      <div className="label-wrapper">
        <label>Price</label>
        <div className="input-container">
          <div className="label-helper">$</div>
          <input
            type="text"
            defaultValue={price.toLocaleString()}
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
            defaultValue={down.toLocaleString()}
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
              defaultValue={trade.toLocaleString()}
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
          <label>Loan Length (Months)</label>
          <div className="input-container">
              <input
                  type="text"
                  defaultValue={loan}
                  onChange={(e) => {
                  setLoan(e.target.value)
                  }}
              />
          </div>
        </div>
      </div>
    </form>
  )
}