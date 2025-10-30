import Header1 from './Header1';
import Footer1 from './Footer1';
import Body1 from './Body1';
import Body2 from './Body2';
import Body3 from './Body3';
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
    <Header1/>
    <Body1 info={eductionInfo}>
      <label htmlFor='percentIncrease' className='percent-label'>
        Provide How much percentage you would like to increase?
      </label>
      <input type='number' id="percentIncrease" onChange={updatePercentValues}/>

    </Body1>
     <Body2 initialvalue={0}/>
     <Body3></Body3>
    <Footer1/>
  </>
)

}

export default App;
