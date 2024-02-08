import React from 'react';

const ATMDeposit = ({ onChange, isDeposit, isValid, errorMessage }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    return (
      <label className="label huge">
        <h3> {choice[Number(!isDeposit)]}</h3>
        <input id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" width="200" value="Submit" id="submit-input" disabled={!isValid}></input>
        {errorMessage && <p>{errorMessage}</p>}
      </label>
    );
  };

    export default ATMDeposit;