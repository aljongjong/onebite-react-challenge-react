import "./App.css";
import Welcome from "./components/day10/Welcome";
import OrderEditor from "./components/day12/OrderEditor";
import CurrencyInput from "./components/day13/CurrencyInput";
import { useState } from "react";

function App() {
  /* day10
  const memberProps = {
    name: "나일론",
    isMember: true,
  };
  return (
    <>
      <Welcome {...memberProps} />
    </>
  );
   */

  // --------------------------------------------------

  /* day 11
  return <OrderEditor />;
   */

  // --------------------------------------------------

  /* day 12
  return <OrderEditor />;
   */

  // --------------------------------------------------

  /* day 13 */
  const [krw, setKrw] = useState(0);
  const [usd, setUsd] = useState(0);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    if (name === "krw") {
      setKrw(value);
      setUsd(value / 1300);
    } else if (name === "usd") {
      setUsd(value);
      setKrw(value * 1300);
    }
  };

  return (
    <>
      <h2>환율 변환기 (KRW-USD)</h2>
      <CurrencyInput krw={krw} usd={usd} onChangeInput={onChangeInput} />
    </>
  );
}

export default App;
