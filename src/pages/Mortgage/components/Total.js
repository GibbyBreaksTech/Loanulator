

// css
import './style.css';

export const Total = ({mortgage, insurance, pmi, hoa, tax}) => {


  return (
    <div className="total-container">
        <h3>Your Payment</h3>
        <h2>{mortgage.toLocaleString()}</h2>
    </div>
  )
}


