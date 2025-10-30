import { useState } from 'react';
import './Body2.css'

function Body2(props) {

    let [counterValue, updateCounterValue] = useState(props.initialvalue);
  return (
    <div className="body2">
      <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Counter App</p>
      <button onClick={() => {
        updateCounterValue(() => {
            return (
                counterValue + 1
            )
        })
      }}>+</button><p>{counterValue}</p> <button onClick={() => {
        updateCounterValue((prev) => {
            return (
                prev > 0 ? prev - 1 : 0
            )
        })
      }}>-</button>
    </div>
  );
}

export default Body2;


// one last query we have multiple properies assigned to this.state and in setState we are updating one or two properties. which means those two will update others remains same

// However in useState, when we try to update value using a callBack function we need to update all the properies right?? Since whatvere callback function returns that only will be allocated to inital value. Is my understanding correct??

// const [state, setState] = useState({
//     product: "Mobile",
//     price: 10000,
//     vendor: "Samsung"
// });

// // ❌ Wrong - This REPLACES entire state
// setState({
//     price: 15000
// });
// // Result: { price: 15000 } - product and vendor are LOST!

// // ✅ Correct - Use spread operator to preserve other properties
// setState(prevState => ({
//     ...prevState,  // Keep all existing properties
//     price: 15000   // Update only price
// }));
// // Result: { product: "Mobile", price: 15000, vendor: "Samsung" }
