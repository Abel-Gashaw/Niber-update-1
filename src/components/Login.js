import { useState } from "react";
import "./Login.css";
import countryList from "country-list";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // ...

  // <select
  //   value={selectedCountry}
  //   onChange={(e) => setSelectedCountry(e.target.value)}
  // >
  //   // options
  // </select>;
  const countries = countryList.getData();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch(
      //'http://localhost:5000/register', {
      "http://localhost:5000/niberdb",
      {
        method: "post",
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          address,
          country: selectedCountry?.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    console.warn(result);
    if (result) {
      alert(
        "Well Come to Niber Foundation pls check your email for any update"
      );
      setEmail("");
      setName("");
      setPhoneNumber("");
      setAddress("");
      selectedCountry("");
    } else {
      alert("Already exist");
    }
  };

  return (
    <>
      <form action="" className="form">
        <h1 className="head">Subscription</h1>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field"
        />
        <br></br>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field"
        />
        <br></br>
        <input
          type="text"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="field"
        />
        <br></br>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="field"
        />
        <select>
          {countries.map((country) => (
            <option
              key={country.code}
              // value={country.code}
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {country.name}
            </option>
          ))}
        </select>
        {/* <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          // options
        </select>
        ; */}
        <br></br>
        <button type="submit" onClick={handleOnSubmit} className="submit-btn">
          Subscribe
        </button>
      </form>
    </>
  );
}

export default Login;
