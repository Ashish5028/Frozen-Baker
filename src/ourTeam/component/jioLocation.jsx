import React, { useState } from "react";

function ProductList() {
  const [address, setAddress] = useState("");
  const [isAddressSaved, setIsAddressSaved] = useState(false);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSaveAddress = () => {
    // Perform validation if needed before saving
    if (address.trim() !== "") {
      setIsAddressSaved(true);
    }
  };

  return (
    <div>
      <h2>Enter Your Address</h2>
      <input
        type="text"
        value={address}
        onChange={handleAddressChange}
        placeholder="Enter your address"
      />
      <button onClick={handleSaveAddress}>Save Address</button>

      {/* Conditionally render pay button based on address saved state */}
      {isAddressSaved && <PayButton />}
    </div>
  );
}

function PayButton() {
  const handlePayClick = () => {
    // Handle payment process
    console.log("Payment process initiated.");
  };

  return (
    <div>
      <h2>Address Saved Successfully!</h2>
      <button onClick={handlePayClick}>Pay</button>
    </div>
  );
}

export default ProductList;
