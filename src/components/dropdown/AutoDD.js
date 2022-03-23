import React from "react";
import './AutoDDStyle.css';
function AutoDD() {
  return (
    <div className="autocomplete">
      <form action="#" method="get" className="form">
        <input list="stockName" placeholder="Company's Symbols"  className="nameInput" />
        <datalist id="stockName">
          <option>AAPL</option>
          <option>MSFT</option>
          <option>BAC</option>
          <option>AMD</option>
          <option>TCS.NS</option>
          <option>SBIN.NS</option>
          <option>RELIANCE.NS</option>
        </datalist>
        &nbsp;
        <input type="submit" value="&rarr;" className="smtArrow" />
      </form>
    </div>
  );
}

export default AutoDD;
