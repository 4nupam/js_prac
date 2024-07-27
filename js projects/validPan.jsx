// validating PAN Card


import React, { useState } from "react";

function PANCardValidator() {
  const [panNumber, setPanNumber] = useState("");
  const [isValid, setIsValid] = useState(null);

  const validatePAN = (pan) => {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(pan);
  };

  const handleChange = (event) => {
    const value = event.target.value.toUpperCase(); // Convert input to uppercase
    setPanNumber(value);
    setIsValid(validatePAN(value));
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">PAN Card Validator</h2>
      <input
        type="text"
        value={panNumber}
        onChange={handleChange}
        placeholder="Enter PAN Number"
        maxLength="10"
        className="border p-2 mb-4 w-full"
      />
      {isValid !== null && (
        <p className={`mt-2 ${isValid ? "text-green-600" : "text-red-600"}`}>
          {isValid ? "Valid PAN Number" : "Invalid PAN Number"}
        </p>
      )}
    </div>
  );
}

export default PANCardValidator;
