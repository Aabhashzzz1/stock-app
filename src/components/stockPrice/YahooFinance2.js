import yahooFinance from "yahoo-finance2";
import { show } from "./utils";

export default function Fin() {
  show(async () => {
    const result = await yahooFinance.quoteSummary("TSLA", {
      // 1. Try adding, removing or changing modules
      // You'll get suggestions after typing first quote mark (")
      modules: ["price"],
    });

    // 2. Put a "." after result to explore
    return console.log(result);

    // 3. Try change "quoteSummary" above to something else
  });
}
