// Donate.js
import "./DonateUs.css";

// Donate.js

import { useState } from "react";

function Donate() {
  const [amount, setAmount] = useState(50);
  const [otherAmount, setOtherAmount] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    if (otherAmount) {
      setAmount(otherAmount);
    }

    // submit donation
  }

  return (
    <div className="donate">
      <h2>Make a Donation</h2>

      <p>Your donation helps us continue our mission.</p>
      <div className="formco">
        <div>
          <h1>International Donation</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Donation Amount:
              <select
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              >
                <option value="25">$25</option>
                <option value="50">$50</option>
                <option value="100">$100</option>
                <option value="250">$250</option>
                {/* <option value="other">Other Amount</option> */}
              </select>
            </label>
            <label className="label">
              <option value="other">Other Amount</option>
              {/* {amount === "other" && ( */}
              <input
                type="number"
                value={otherAmount}
                onChange={(e) => setOtherAmount(e.target.value)}
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "200px",
                }}
              />
            </label>
            {/* )} */}

            <button type="submit">Donate {amount}</button>
          </form>
        </div>
        <div>
          <h1>Local donation</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Donation Amount:
              <select
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              >
                <option value="25">50Birr</option>
                <option value="50">100Birr</option>
                <option value="100">200Birr</option>
                <option value="250">500Birr</option>
                {/* <option value="other">Other Amount</option> */}
              </select>
            </label>
            <label className="label">
              <option value="other">Other Amount</option>
              {/* {amount === "other" && ( */}
              <input
                type="number"
                value={otherAmount}
                onChange={(e) => setOtherAmount(e.target.value)}
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  width: "200px",
                }}
              />
            </label>
            {/* )} */}

            <button type="submit">Donate {amount}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;
