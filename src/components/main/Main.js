import React from "react";
import AutoDD from "../dropdown/AutoDD";
import GoogleChart from "../candlestick/GoogleChart";
import Fin from "../stockPrice/YahooFinance2";
function Main() {
  return (
    <div>
      <AutoDD />
      <GoogleChart />
      {/* <script src="src\components\stockPrice\YahooFinance2.js"></script> */}
      <Fin />
    </div>
  );
}

export default Main;
