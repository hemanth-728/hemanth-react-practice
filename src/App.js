import Header1 from './Header1';
import Footer1 from './Footer1';
import Body1 from './Body1';
import Body2 from './Body2';
import Body3 from './Body3';
import Product1 from './Product1';
import User1 from './User1'
import User2 from './User2'
import User3 from './User3'
import User4 from './User4'
import Home1 from './Home1'
import {BrowserRouter, Routes, Route, useParams, useLocation} from 'react-router-dom';
import './App.css';


function updatePercentValues() {
  let userInputValue = parseFloat(document.getElementById("percentIncrease").value);
  let allPercentValues = document.querySelectorAll('.percent-val');

  allPercentValues.forEach(function(element) {
    // Store original value if not already stored
    if (!element.hasAttribute('data-original-value')) {
      element.setAttribute('data-original-value', element.textContent);
    }
  });

  if (!isNaN(userInputValue)) {
    allPercentValues.forEach(function(element) {
      let originalValue = parseFloat(element.getAttribute('data-original-value').trim());
      let newValue = originalValue + userInputValue;
      if (newValue > 100) {

      } else {
        element.textContent = newValue;
      }
    });
  } else {
    allPercentValues.forEach(function(element) {
      element.textContent = element.getAttribute('data-original-value');
    });
  }
}

let eductionInfo = [
  {
    'sno' : 1,
    'University': 'JJVM',
    'Class': 10,
    'Percentage': 86
  },
  {
    'sno' : 2,
    'University': 'SJJC',
    'Class': 12,
    'Percentage': 95.4
  },
  {
  'sno' : 3,
  'University': 'YITS',
  'Class': 16,
  'Percentage': 75.4
  }
]


function App() {
return (
  <>
    {/* <Body1 info={eductionInfo}>
      <label htmlFor='percentIncrease' className='percent-label'>
        Provide How much percentage you would like to increase?
      </label>
      <input type='number' id="percentIncrease" onChange={updatePercentValues}/>

    </Body1>
     <Body2 initialvalue={0}/>
     <Body3></Body3> */}
    <BrowserRouter>
    <Header1/>
    
    <Footer1/>
        <Routes>
            <Route path="/" element={<Home1 />} >
              <Route path="user/:ad" element={<User1 />} />
            </Route>
            <Route path="/men" element={<Product1 />} />
            <Route path="/women" element={<Product1 />} />
            <Route path="/kids-boys" element={<Product1 />} />
            <Route path="/kids-girls" element={<Product1 />} />
        </Routes>
    </BrowserRouter>
  </>
)

}

export default App;
