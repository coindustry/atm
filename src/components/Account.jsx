import React, { useState } from 'react';
import '/Users/freddygenatios/Desktop/MIT Projects/ATM project/atm-project/src/styles.css'; // Import styles
import WalletIcon from '../icons/wallet.svg'; // Import wallet icon
import ATMDeposit from './ATMDeposit'; // Import ATMDeposit component

const Account = () => {
  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [atmMode, setAtmMode] = useState("");
  const [validTransaction, setValidTransaction] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const status = `Account Balance $ ${totalState} `;
  console.log(`Account Rendered with atmMode: ${atmMode}`);

  const handleChange = (event) => {
    console.log(`handleChange ${event.target.value}`);
    if (event.target.value <= 0) {
      setValidTransaction(false);
      return;
    }

    if (atmMode === "Cash Back" && event.target.value > totalState) {
      setErrorMessage("Your account cannot handle such actions!");
      setValidTransaction(false);
    } else {
      setErrorMessage("");
      setValidTransaction(true);
    }

    setDeposit(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    if (validTransaction) {
      const newTotal = atmMode === "Deposit" ? totalState + deposit : totalState - deposit;
      setTotalState(newTotal);
    }
    event.preventDefault();
  };

  const handleModeSelect = (event) => {
    const mode = event.target.value;
    setAtmMode(mode);
  };

  return (
    <div className="account-container">
      <img src={WalletIcon} alt="Wallet Icon" className="wallet-icon" /> {/* Render the wallet icon */}
      <form onSubmit={handleSubmit}>
        <h2 id="total">{status}</h2>
        <label>Select an action below to continue</label>
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
          <option id="no-selection" value=""></option>
          <option id="deposit-selection" value="Deposit">Deposit</option>
          <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>
        {atmMode !== "" && (
          <ATMDeposit
            onChange={handleChange}
            isDeposit={atmMode === "Deposit"}
            isValid={validTransaction}
            errorMessage={errorMessage}
          />
        )}
      </form>
    </div>
  );
};

export default Account;
