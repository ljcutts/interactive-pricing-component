import React,{useState, useEffect} from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(50);
  const [toggle, setToggle] = useState(false);
  const [subscriptionAmount, setSubscriptionAmount] = useState(16);
  const [pageviews, setPageviews] = useState('100K');
  

  const handleInputChange = (e) => {
   e.preventDefault();
   let target = e.target;
   const min = target.min;
   const max = target.max;
   const val = target.value;
   target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
   setValue(e.target.value);
 };

  useEffect(() => {
    if (value === 0 || value < 20) {
      if (toggle === true) {
        setSubscriptionAmount(8 - 8 * 0.25);
      } else if (toggle === false) {
        setSubscriptionAmount(8);
      }
      setPageviews('10K');
    }
    if (value > 20 && value < 40) {
      if (toggle === true) {
        setSubscriptionAmount(12 - 12 * 0.25);
      } else if (toggle === false) {
        setSubscriptionAmount(12);
      }
      setPageviews("50K");
    }
    if (value > 40 && value < 60) {
      if (toggle === true) {
        setSubscriptionAmount(16 - 16 * 0.25);
      } else if (toggle === false) {
        setSubscriptionAmount(16);
      }
      setPageviews("100K");
    }
     if ((value > 60) & (value < 95)) {
       if (toggle === true) {
         setSubscriptionAmount(24 - 24 * 0.25);
       } else if (toggle === false) {
         setSubscriptionAmount(24);
       }
        setPageviews("500K");
     }

     if (value > 95) {
       if (toggle === true) {
         setSubscriptionAmount(36 - 36 * 0.25);
       } else if (toggle === false) {
         setSubscriptionAmount(36);
       }
       setPageviews("1M");
     }
  }, [toggle,value])



  const handleToggle = () => {
   setToggle(!toggle);
  }

  return (
    <>
      <div className="img-container">
        <img src="/images/pattern-circles.svg" alt="" className="circles" />
        <h1>Simple, traffic-based pricing</h1>
        <p> Sign-up for our 30-day trial. </p>
        <p className="credit">No credit card required.</p>
      </div>
      <div className="subscription-container">
        <div className="top">
          <p>{pageviews} PAGEVIEWS</p>
          <input
            type="range"
            value={value}
            min="0"
            max="100"
            onChange={handleInputChange}
          />
          <h1 className="subscription-amount">
            ${subscriptionAmount}.00 <span>/month</span>
          </h1>
          <div className="billing">
            <div className="monthly">
              <span>Monthly Billing</span>
              <button onClick={handleToggle}>
                <button className={`${toggle ? "toggle" : "toggle2"}`}></button>
              </button>
            </div>
            <div className="yearly">
              <span>Yearly Billing</span>
              <button>
                <h1>-25%</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="underline"></div>
        <div className="bottom">
          <div className="bottom-component">
            <img src="/images/icon-check.svg" alt="" />
            <span>Unlimited websites</span>
          </div>
          <div className="bottom-component">
            <img src="/images/icon-check.svg" alt="" />
            <span>100% data ownership</span>
          </div>
          <div className="bottom-component">
            <img src="/images/icon-check.svg" alt="" />
            <span>Email reports</span>
          </div>
          <button>Start my trial</button>
        </div>
      </div>
    </>
  );
}

export default App
