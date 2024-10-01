import React, { useState } from "react";

function CountrySearch() {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchCountryData = async () => {
    setErrorMessage("");
    setCountryData(null);

    // Validation process check if the input is empty
    if (!countryName.trim()) {
      setErrorMessage("Please provide a country name!");
      return;
    }

    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (!response.ok) throw new Error("Country not found");

      const data = await response.json();
      setCountryData(data[0]);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="country-search">
      <h1> Search countries details</h1>
      <input
        type="text"
        placeholder="Enter a country name"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
      />
      <button onClick={fetchCountryData}>Search</button>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {countryData && (
        <div className="country-details">
          <h2>{countryData.name.common}</h2>
          <img
            src={countryData.flags.png}
            alt={`Flag of ${countryData.name.common}`}
            width="100"
          />
          <table>
            <tbody>
              <tr>
                <th>Capital</th>
                <td>{countryData.capital}</td>
              </tr>
              <tr>
                <th>Population</th>
                <td>{countryData.population.toLocaleString()}</td>
              </tr>
              <tr>
                <th>Languages</th>
                <td>{Object.values(countryData.languages).join(", ")}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CountrySearch;
