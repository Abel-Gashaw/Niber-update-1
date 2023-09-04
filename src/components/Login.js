import { useState } from "react";
import "./Login.css";
import countryList from "country-list";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  // Get MongoDB collection
  // const Collection = require("./userSchema");

  // Route handler for admin page
  // app.get("/admin", async (req, res) => {
  //   // Fetch all documents from collection
  //   const documents = await Collection.find();

  //   // Build table rows array
  //   let tableRows = [];
  //   documents.forEach((doc) => {
  //     tableRows.push(
  //       <tr>
  //         <td>${doc.name}</td>
  //         <td>${doc.email}</td>
  //         <td>${doc.phone}</td>
  //       </tr>
  //     );
  //   });

  //   // Render admin page with table
  //   res.render("admin", {
  //     layout: "adminLayout",
  //     tableRows: tableRows.join(""),
  //   });
  // });
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
          country,
          // Send just the code property
          // country: selectedCountry.name,
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
      setCountry("");
    } else {
      alert("Already exist");
    }
  };

  return (
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
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="country-select"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>

      <br></br>
      <button type="submit" onClick={handleOnSubmit} className="submit-btn">
        Subscribe
      </button>
    </form>
  );
}

export default Login;
