/*
Zadání 1: Převeďte `cislo` na stavovou proměnnou.
Zadání 2: Zařiďte, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku,
  vynulovat nastavovalo na nulu apod.
*/

import { useState } from "react";

const Pocitadlo = () => {
  const [cislo, setCislo] = useState(0);
  const prictiPet = () => {
    setCislo(cislo + 5);
  };
  const prictiJedna = () => {
    setCislo(cislo + 1);
  };
  const odectiJedna = () => {
    setCislo(cislo - 1);
  };
  const odectiPet = () => {
    setCislo(cislo - 5);
  };
  const vynuluj = () => {
    setCislo(0);
  };

  return (
    <>
      <h3>Počítadlo: {cislo}</h3>
      <div>
        <button onClick={odectiPet}>-5</button>
        <button onClick={odectiJedna}>-1</button>
        <button onClick={vynuluj}>vynulovat</button>
        <button onClick={prictiJedna}>+1</button>
        <button onClick={prictiPet}>+5</button>
      </div>
    </>
  );
};

export const Uloha2 = () => {
  return (
    <>
      <Pocitadlo />
      <Pocitadlo />
    </>
  );
};
