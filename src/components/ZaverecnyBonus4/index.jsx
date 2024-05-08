import { useState } from "react";
import "./style.css";
/*
Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních
  políček, vypiš do `<output></output>` jejich součet.
*/

export const ZaverecnyBonus4 = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  return (
    <div className="bonus4">
      <input
        type="number"
        defaultValue="0"
        onChange={(event) => {
          setA(Number(event.target.value));
        }}
      />{" "}
      +{" "}
      <input
        type="number"
        defaultValue="0"
        onChange={(event) => {
          setB(Number(event.target.value));
        }}
      />{" "}
      = <output>{a + b}</output>
    </div>
  );
};
